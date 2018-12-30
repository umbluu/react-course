import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join( ' ' );
    }

    if (props.persons.length <= 2) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }

    if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold );  // classes = ['red', 'bold']
    }

    return (
        // <Aux></Aux> --> can use fragment <></> since 16.2. Built in "Aux" component
        <Aux> 
            <h1>Hi, I'm a React App</h1>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </Aux>
    );
};

export default cockpit;