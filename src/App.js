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

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //   // DO NOT DO THIS: this.state.persons[0].name = 'Andre';
  //   this.setState({
  //     persons: [
  //     { name: newName, age: 26 },
  //     { name: 'Tim', age: 32},
  //     { name: 'Steph', age: 68}
  //   ]
  //  })
  // }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { id: 'asdf', name: 'Andre', age: 26 },
      { id: 'dsas3', name: event.target.value, age: 32},
      { id: 'sdas2', name: 'Steph', age: 28}
    ]
   })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // ES6 way
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} />
          })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

         {persons} 
      </div>
    );
  }
}

export default App;
