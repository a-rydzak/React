import React, { useState } from 'react';
import Header from './test-components/Header';
import Person from './test-components/Person';
import './App.css';

const app2 = props => {
  //----------Lets use a hook to mimic App.js !!!!!!
  const [personState, setPersonState] = useState({
    persons: [{ name: 'Andrew' }, { name: 'Joe' }, { name: 'Billy' }],
    nonPersons: [{ tester: 'Andrew' }]
  });

  const [nonPersonState, setNonPersonState] = useState({
    nonPersons: [{ tester: 'Andrew' }]
  });

  const switchNameHandler = () => {
    //-----This replaces the old state completely does not just update...nonPersons Will Disappear
    setPersonState({
      persons: [
        { name: personState.persons[1].name },
        { name: personState.persons[2].name },
        { name: personState.persons[0].name }
      ]
    });
  };

  return (
    <div className='App'>
      <Header />
      <button onClick={switchNameHandler}>Click Me</button>
      <h1>{props.myName} Was Here!</h1>
      <Person name={personState.persons[0].name} />
      <Person name={personState.persons[1].name}>
        I am being passed as a child
      </Person>
      <Person name={personState.persons[2].name} />
    </div>
  );
};

export default app2;
