import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name : "Sala", age : 20 },
      {name : "Ish", age : 18},
      {name : "Aradhya", age : 4}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App </h1>
        <button>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobies: Singing</Person>
      </div>
    );
  }
}

export default App;
