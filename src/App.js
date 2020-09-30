import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  
  state = {
    persons: [{name: 'Max', age: 28}, {name: 'Manu', age: 29}, {name: 'Stephanie', age: 26}


  ]}
  
  switchNameHandler = (newName) => {
     //console.log('clicked');
    // DON'T DO THIS this.state.persons[0] = 'Maximus';
    this.setState({persons: [
      {name: newName, age: 28}, 
      {name: 'Manu', age: 29}, 
      {name: 'Stephanie', age: 21}]});  
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28}, 
      {name: event.target.value, age: 29}, 
      {name: 'Stephanie', age: 21}]});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return(
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App'}, 'Hi Im a react app'));
      <div className="App">
        
        <button 
        style={style}
        onClick={this.switchNameHandler}>Switch name!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
        name = {this.state.persons[2].name} 
        age={this.state.persons[2].age} />
       </div>
    
    )}
}

export default App;
