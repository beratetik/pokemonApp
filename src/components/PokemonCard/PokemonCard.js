import React from "react";
import PropTypes from "prop-types";
import PokemonImage from "../PokemonImage/PokemonImage";
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import { useHistory } from "react-router-dom";
import classes from "./PokemonCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import PokemonImageText from "../PokemonImageText/PokemonImageText";
import { clearPokemon } from "../../store/actions/pokemon.action";

const PokemonCard = ({ name }) => {
  const pokemon = useSelector(state => state.pokemonReducer.pokemon);
  const history = useHistory();
  const dispatch = useDispatch();
  const fallbackImg = useSelector(state => state.pokemonReducer.fallbackImg);

  return (
    <>
      {pokemon ? (
        <div className={classes.cardContainer}>
          <button
            className={classes.button}
            onClick={() => {
              dispatch(clearPokemon);
              history.push("/pokemon");
            }}
          >
            X
          </button>
          <PokemonImage
            name={pokemon && pokemon.name ? pokemon.name : ""}
            fallbackImg={fallbackImg}
          />
          <PokemonImageText name={name} />
          <PokemonInfo info={pokemon} />
        </div>
      ) : (
        <h1 className={classes.loading}> Loading...</h1>
      )}
    </>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  info: PropTypes.object,
  closeButton: PropTypes.bool
};

export default PokemonCard;
