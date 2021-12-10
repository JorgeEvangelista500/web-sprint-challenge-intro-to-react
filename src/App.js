import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
const [characters, setCharacters] = useState([])
const [currentCharacter, setCurrentCharacter] = useState('1')

const openDetails = character=> {
  setCurrentCharacter(character)
}

const closeDetails = () => {
  setCurrentCharacter(null)
}

useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacters(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars!</h1>
      {
        characters.map((chr) => {
          return (
          <div>
            <Character info={chr} key={chr.name} action={openDetails}/>
           {currentCharacter && currentCharacter.name === chr.name && <Details details={currentCharacter} close={closeDetails} />}
          </div>)
        })

      }
  
    </div>
  );
}

export default App;
