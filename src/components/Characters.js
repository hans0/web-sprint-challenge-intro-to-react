import React, {useState, useEffect} from "react";
import Character from './Character';
import axios from 'axios';

export default function Characters() {
  const [characterLinksEpisodeV, setCharacterLinksEpisodeV] = useState(null);

  // const [characterNumbers, setCharacterNumbers] = useState([]);


  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/2/`)
      .then((res) => {
        setCharacterLinksEpisodeV(res.data.characters);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })}
  , [])
  let characterNumbers = [];
  if (characterLinksEpisodeV) {
    /* grabs the number at the end with a regex, regex is not original */
    characterLinksEpisodeV.forEach(char => characterNumbers.push(/[^/]*$/.exec(char.substring(0, char.length-1))[0]))
  } 

  return (
    <div className="characters">
      {characterNumbers.map(c => 
        <Character key={c} number={c} />)}
      
    </div>
  );


}