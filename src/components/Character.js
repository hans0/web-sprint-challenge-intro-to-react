import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Details from './Details';
import './Character.css';

// Write your Character component here
export default function Character(props) {
  const { number } = props;
  const [detailsVisible, setDetailsVisible] = useState(true);

  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${number}/`)
      .then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [number]);
  
  const [homeworld, setHomeworld] = useState(null);
  useEffect(() => {
    axios.get(`${character.homeworld}`)
      .then((res) => {
        // console.log(res.data);
        setHomeworld(res.data);
      })
      .catch((err) => {
        // console.log(`HOMEWORLD ERROR: ${err}`);
      });
    }, [character]);
  
  // const [movieLinks, setMovieLinks] = useState(null);
  // useEffect(() => {
  //   character && 
  //   character.films.forEach(element => {
  //     console.log(element)
  //   });
  // }, [character]);
  

  return (
    <div className='character'>
      {/* <div className='header'>{character.name} <button className='detailsButton'>details</button></div> */}
      <div className='header'>{character.name} <button onClick={()=> setDetailsVisible(!detailsVisible)}>details</button></div>
      {
      }
      {detailsVisible && character &&

        <Details character={character} homeworld={homeworld} number={number} />
      }
    </div>
  )
}