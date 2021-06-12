import React from 'react';

const Viewer = props => {
    return (
        <>
            {props.outputValue && (
                < iframe title="View" width="100%" height="100%" srcDoc={props.outputValue}></iframe>
            )}
        </>
    );
};

export default Viewer;