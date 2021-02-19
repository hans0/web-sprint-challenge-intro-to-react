import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Character.css';



export default function Details(props) {
  // const [homeworld, setHomeworld] = useState('Tatooine');
  const { character, number } = props;


  const [homeworld, setHomeworld] = useState(null);
  useEffect(() => {
    axios.get(`${character.homeworld}`)
      .then((res) => {
        console.log(res.data);
        setHomeworld(res.data);
      })
      .catch((err) => {
        console.log(`HOMEWORLD ERROR: ${err}`);
      });
  }, [character]);


  return (
    <div className='details'>
      <p>Homeworld: {homeworld ? homeworld.name : 'Loading...'}</p>

    </div>
  )
}

