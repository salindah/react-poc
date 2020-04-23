import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { id: "21312312", name: "Sali", age: 33}, 
      { id: "34534534", name: "Iesh", age: 28}, 
      { id: "67675656", name: "Aradhya", age: 5},
      { id: "12122222", name: "Aarya", age: 1}
    ],
    showPersons : false
  };

  nameChangedHandler = (event, id) => {    
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    
    const personsUpdated = [ ...this.state.persons];
    personsUpdated[personIndex] = person;
    this.setState({ persons: personsUpdated});
  }

  deletePersonHandler = (personIndex) => {
    const persons =  [...this.state.persons];
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

    let persons = null;
    let buttonClasses = [classes.Button]

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
              click={ () => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)}/>
          })}        
        </div> 
      );
      buttonClasses.push(classes.Red);
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push( classes.red );
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push( classes.bold );
    }

    return (      
      <div className={classes.App}>
        <h1>Hi I am a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={buttonClasses.join(' ')} 
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}         
      </div>                 
    );
  }
}

export default App;
