import React from 'react';
import './Useroutput.css'

const useroutput = (props) => {
    return (
        <div className="Useroutput">
            <p>{props.username} : Hi everyone!</p>
            <p>This is test paragraph.</p>
        </div>
    )
};

export default useroutput;