import React, { useEffect, useState } from 'react';
import Character from './components/Character';
import Characters from './components/Characters';

import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  

  // ATTEMPT 1
  // function getCharacterByNumber(number){
  //   useEffect(
  //     axios.get(`https://swapi.dev/api/people/${number}/`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   , []);
  // }
  // ATTEMPT 2
  // function getCharacterByNumber(number) {
  //   const [character, getCharacter] = useState({});

  //   useEffect((number) => {
  //     axios.get(`https://swapi.dev/api/people/${number}/`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   }, []);
  //   return character;
  // }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters />
    </div>
  );
}

export default App;
