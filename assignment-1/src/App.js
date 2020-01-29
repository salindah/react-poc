import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
      username : "Adnilas"
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username : event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeUsernameHandler} 
                    username={this.state.username}>
        </UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
