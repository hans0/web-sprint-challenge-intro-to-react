import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Write your Character component here
export default function Character({number}) {
  const [character, setCharacter] = useState({});
  const [detailsVisible, setDetailsVisible] = useState(false)


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${number}/`)
      .then((res) => {
        // console.log(res);
        setCharacter(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }, []);
    
    
    
  return (
    <div>
      <div>{character.name} <button>details</button></div>
      {detailsVisible && 
        <>
        <p>Homeworld: Tatooine</p>
        </>
      }
    </div>
  )
}