import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return(
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App'}, 'Hi Im a react app'));
      <div className="App">
        <header className="App-header">
           
          <h1 className="App-title">Welcome to React</h1>
          <h1>Hi, I'm a react app</h1>
          
        </header>
        <Person name="Max" age="28" />
          <Person name="Manu" age="30" >My Hobbies: Racing</Person>
          <Person name = "Stephanie" age="26" />
       </div>
    
    )}
}

export default App;
