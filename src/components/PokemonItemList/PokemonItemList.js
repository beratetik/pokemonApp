import React from "react";
import PropTypes from "prop-types";
import PokemonItem from "../PokemonItem/PokemonItem";
import SearchPokemon from "../SearchPokemon/SearchPokemon";
import classes from "./PokemonItemList.module.css";
import { useSelector } from "react-redux";
import { getPokemonID } from "../../helper/helper";

const PokemonItemList = () => {
  const pokemons = useSelector(state =>
    state.pokemonReducer.pokemons.slice(0, 50)
  );

  const filteredPokemons = useSelector(state =>
    state.pokemonReducer.filteredPokemons.slice(0, 50)
  );

  return (
    <div>
      <SearchPokemon disabled={!pokemons.length} />
      <div
        className={`${classes.gridContainer} ${
          filteredPokemons.length === 1 ? classes.center : ""
        }`}
      >
        {filteredPokemons.length ? (
          filteredPokemons.map(({ name, url }) => (
            <PokemonItem key={getPokemonID(url)} name={name} />
          ))
        ) : (
          <h1> Loading Pokemons...</h1>
        )}
      </div>
    </div>
  );
};

PokemonItemList.propTypes = {
  name: PropTypes.string
};

PokemonItemList.defaultProps = {
  name: "Unkown Pokemon"
};

export default PokemonItemList;
