import React from 'react'

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <h2>Nombre: {this.props.pokemon.name}</h2>
        <img src={this.props.pokemon.sprites.front_default} />
      </div>
    )
  }
}

export default Pokemon;