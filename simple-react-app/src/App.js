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

  switchNameHandler = (name) => {
    //console.log("Button clicked");
    this.setState({
      persons : [
        {name : name, age : 21 },
        {name : "Isha", age : 18},
        {name : "Aradhya", age : 5}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name : "Max", age : 21 },
        {name : "asdasd", age : 18},
        {name : event.target.value, age : 5}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi I am a React App </h1>
        <button
        style ={style}
        onClick={this.switchNameHandler.bind(this, "Salinda11")} >Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Sala22")}
            change={this.nameChangedHandler}>
            My Hobies: Singing
        </Person>
      </div>
    );
  }
}

export default App;
