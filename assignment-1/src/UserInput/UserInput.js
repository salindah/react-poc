import React from 'react';

const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid red',
    padding: '8px'
};

const userinput = (props) => {
    return (
        <div>
            <input style={style} type="text" onChange={props.change} value={props.username}></input>
        </div>
    )
};

export default userinput;