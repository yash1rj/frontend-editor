import React from 'react';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";

const Editor = props => {

    return (
        <AceEditor
            mode="html"
            placeholder='Start Coding'
            theme={props.theme ? 'solarized_light' : 'solarized_dark'}
            onChange={props.setHtmlValue}
            height="550px"
            width="100%"
            fontSize={18}
            name="editor"
            setOptions={{ useWorker: false }}
            editorProps={{ $blockScrolling: true }}
        />
    );
};

export default Editor;