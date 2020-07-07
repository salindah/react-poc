import React, {useEffect} from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        setTimeout( () => {
            alert('Saved data to the cloud..')
        }, 1000);

        return () => {
            console.log('[Cockpit.js] clean-up work.');
        }

    }, []);

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