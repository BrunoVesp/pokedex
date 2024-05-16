import './App.css';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Header } from './components/Header';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const [filterPokemon, setFilterPokemon] = useState('');

  const filteredPokemon = (nome) => {
    setFilterPokemon(nome);
  }

  const getApiData = async () => {
    const endpoints = [];
    try {
      for(let i = 1; i <= 151; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      await Promise.all(endpoints.map((endpoint) => fetch(endpoint)))
      .then ((response) => Promise.all(response.map(async res => res.json())))
      .then ((response) =>{
        setPokemons(response);
      })
    } catch (error) {
      console.log(error);
    }
  
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Header filteredPokemon={filteredPokemon} />
      <div className='container'>
        {pokemons.filter((pokemon) => pokemon.name.includes(filterPokemon)).map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} types={pokemon.types} />
      ))}
      </div>
      
    </>
  );
}

export default App;
