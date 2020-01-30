import React, { useState, useEffect } from 'react';
import Header from './test-components/Header';
import Person from './test-components/Person';


const App2 = (props) => {
  //----------Lets use a hook to mimic App.js !!!!!!
  const [personState, setPersonState] = useState({
    persons: [{ name: 'Andrew' }, { name: 'Joe' }, { name: 'Billy' }],
    nonPersons: [{ tester: 'Andrew' }]
  });

  const [nonPersonState, setNonPersonState] = useState({
    nonPersons: [{ tester: 'Andrew' }]
  });

  useEffect(() =>{ 
    // runs everytime a component is rendered for componont did mount / update
    const timer = setTimeout(()=>{alert('saving data to cloud!')} ,1000)
    return () =>{ clearTimeout(timer)}
  }, [personState,nonPersonState]) //this bit at the end ensures this occurs only when personState changes, use [] for it to only run once
      // [a,b] acts as an or

  useEffect(() =>{ 
    return () => {console.log('Clean Up in Effect')}
  })
  const switchNameHandler = () => {
    //-----This replaces the old state completely does not just update...nonPersons Will Disappear
    setPersonState({
      persons: [
        { name: personState.persons[1].name },
        { name: personState.persons[2].name },
        { name: personState.persons[0].name }
      ]
    });
    setNonPersonState({nonPersons: [{ tester: 'Andy' }]})
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

export default App2;
