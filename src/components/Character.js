import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Details from './Details';
import './Character.css';

// Write your Character component here
export default function Character(props) {
  const { number } = props;

  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${number}/`)
      .then((res) => {
        // console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);
  
  
  
  const [detailsVisible, setDetailsVisible] = useState(true);
  
  


  return (
    <div className='character'>
      {/* <div className='header'>{character.name} <button className='detailsButton'>details</button></div> */}
      <div className='header'>{character.name} <button onClick={()=> setDetailsVisible(!setDetailsVisible)}>details</button></div>

      {detailsVisible && character &&
        <Details character={character} number={number} />
       
      }
    </div>
  )
}