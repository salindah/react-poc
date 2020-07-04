import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {

    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.Red;
    }


    let assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    //Test commit
    return(
        <div className={classes.Cockpit}>
            <h1>Hi I am a react app</h1>
            <p className={assignedClasses.join(' ')} > This is really working </p>
            <button className={buttonClass}
                onClick={props.clicked} > Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;