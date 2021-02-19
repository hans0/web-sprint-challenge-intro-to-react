import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Character.css';



export default function Details(props) {
  // const [homeworld, setHomeworld] = useState('Tatooine');
  const { character, homeworld, number } = props;

  return (
    <div className='details'>
      <p>Born: {character.birth_year}</p>
      <p>Homeworld: {homeworld ? homeworld.name : 'Loading...'}</p>
    </div>
  )
}

