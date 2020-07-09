import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../containers/hoc/withClass';

class Person extends Component {

    render(){
        console.log('[Person.js] Rendering.');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    I am a {this.props.name}. I am { this.props.age } years old.
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </div>                  
        )    
    }
};

export default withClass(Person, classes.Person);