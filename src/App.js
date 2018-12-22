import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andre', age: 26 },
      { name: 'Tim', age: 32},
      { name: 'Steph', age: 18}
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DO NOT DO THIS: this.state.persons[0].name = 'Andre';
    this.setState({
      persons: [
      { name: newName, age: 26 },
      { name: 'Tim', age: 32},
      { name: 'Steph', age: 68}
    ]
   })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Andre', age: 26 },
      { name: event.target.value, age: 32},
      { name: 'Steph', age: 28}
    ]
   })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid blue',
      borderRadius: '50px',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, '!?Max')}
              changed={this.nameChangedHandler}>My hobbies: Basketball
              </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />
          </div> : null
        } 
      </div>
    );
  }
}

export default App;
