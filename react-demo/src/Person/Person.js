import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 50%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    color: blue;
`;

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I am a {props.name}. I am { props.age } years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </StyledDiv>                  
    )    
};

export default person;