import './App.css';
import 'primeflex/primeflex.css';

import Editor from './components/Editor';
import Viewer from './components/Viewer';

import { useState } from 'react';

function App() {

  const [htmlValue, setHtmlValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [theme, setTheme] = useState(false);

  const runCodeHandler = () => {
    setOutputValue(htmlValue);
  };

  const saveCodeHandler = () => {
    // update the download link state
    let dl = `data:text/plain;charset=utf-8,${encodeURIComponent(htmlValue)}`;
    setDownloadLink(dl);
  };

  const themeChangeHandler = () => {
    setTheme(prevState => !prevState);
  };

  return (
    <div>
      <div className="p-grid">
        <div style={{border: '1px solid green'}} className="p-col-12 p-md-6 p-lg-6">
          <Editor theme={theme} setHtmlValue={setHtmlValue} />
        </div>
        <div style={{border: '1px solid green'}} className="p-col-12 p-md-6 p-lg-6">
          <Viewer outputValue={outputValue} />
        </div>
      </div>
      <hr />
      <div className="p-grid">
        <button className="run-button p-col-2 p-md-2 p-lg-2 p-d-block p-mx-auto" onClick={runCodeHandler}>Run</button>
        <button className="run-button p-col-2 p-md-2 p-lg-2 p-d-block p-mx-auto" onClick={themeChangeHandler}>Switch Theme</button>
        <a 
          className="run-button p-col-2 p-md-2 p-lg-2 p-d-block p-mx-auto" 
          download='download.txt'
          href={downloadLink}
          onClick={saveCodeHandler}>Save your Code</a>
      </div>
    </div>
  );
}

export default App;
