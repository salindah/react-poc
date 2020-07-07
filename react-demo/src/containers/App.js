import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Constructor');
  }

  state = {
    persons: [
      { id: "21312312", name: "Sali", age: 33 },
      { id: "34534534", name: "Iesh", age: 28 },
      { id: "67675656", name: "Aradhya", age: 5 },
      { id: "12122222", name: "Aarya", age: 1 }
    ],
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
    console.log(snapshot);
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const personsUpdated = [...this.state.persons];
    personsUpdated[personIndex] = person;
    this.setState({ persons: personsUpdated });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    console.log('[App.js] Render.');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>

        <button onClick={() => {
            this.setState({ showCockpit: false });
          }} >Remove Cockpit</button>

        {this.state.showCockpit ? (
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />)
          : null}

        {persons}
      </div>
    );
  }
}

export default App;
