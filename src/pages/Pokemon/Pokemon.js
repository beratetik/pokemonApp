import React, { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadPokemon } from "../../store/actions/pokemon.action";

const Pokemon = ({
  match: {
    params: { name }
  }
}) => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemonReducer.pokemon);

  useEffect(() => dispatch(loadPokemon(name)), []);

  return <PokemonCard name={pokemon.name} />;
};

Pokemon.propTypes = {
  match: PropTypes.object.isRequired
};

export default Pokemon;
