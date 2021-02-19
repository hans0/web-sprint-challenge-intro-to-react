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
    characterLinksEpisodeV.forEach(char => characterNumbers.push(/[^/]*$/.exec(char.substring(0, char.length-1))[0]))
  } 

  return (
    <div className="characters">
      {/* {characterLinksEpisodeV.map((cl) =>  <Character key={10} characterLink={cl} />
      )} */}
      {characterNumbers.map(c => 
        <Character key={c} number={c} />)}
      {/* <Character key={10} number={10} /> */}
    </div>
  );


}