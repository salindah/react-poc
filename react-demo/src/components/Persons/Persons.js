import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {

        if( nextProps.persons !== this.props.persons){
            console.log('[Persons.js] shouldComponentUpdate');
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate() {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Sanpshot'}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] Render');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    change={(event) => this.props.changed(event, person.id)} />
            );
        });
    }
};

export default Persons;


