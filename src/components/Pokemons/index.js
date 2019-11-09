import React from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon'

class Pokemons extends React.Component {
  state = {
    pokemons: [],
    total: 0,
    pokemon: null
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
      this.setState({
        pokemons: response.data.results,
        total: response.data.count
      })
    })
  }

  onPokemonClick = (pokemonName) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemonName)
    .then(response => {
      console.log(response.data);
      this.setState({
        pokemon: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemons existentes {this.state.total}</h1>
        <ul>
          {this.state.pokemons.map(pokemon => {
            return <li key={pokemon.name} onClick={()=> this.onPokemonClick(pokemon.name)}>
              {pokemon.name}
            </li>
          })}
        </ul>
        {this.state.pokemon && <Pokemon pokemon={this.state.pokemon}></Pokemon>}
      </div>
    )
  }
}

export default Pokemons;