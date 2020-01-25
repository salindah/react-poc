import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name: "Sali", age: 33}, 
      { name: "Iesh", age: 28}, 
      { name: "Aaray", age: 5}
    ]
  };

  switchNameHandler = (newName) => {
    
    this.setState({
      persons : [
        { name: newName, age: 33}, 
        { name: "Iesh", age: 32}, 
        { name: "Aaray", age: 5}
      ]
    });
  }

  nameChangedHandler = (event) => {
    
    this.setState({
      persons : [
        { name: "Sali", age: 33}, 
        { name: event.target.value, age: 32}, 
        { name: "Aaray", age: 5}
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
    };

    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <p>This is really working</p>
        <button
          style={style} 
          onClick={this.switchNameHandler.bind(this, "Salinda Hett")}>Switch Names</button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>

        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Adnilas")}
                change={this.nameChangedHandler}>
                  My Hobbie is cricket
        </Person>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>      
    );

    // return React.createElement('div', null, React.createElement('h1', null, 'Does it work'));
  }
}

export default App;
