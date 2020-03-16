import React from "react";
import PropTypes from "prop-types";
import PokemonImage from "../PokemonImage/PokemonImage";
import PokemonImageText from "../PokemonImageText/PokemonImageText";
import { Link } from "react-router-dom";
import classes from "./PokemonItem.module.css";
import { useSelector } from "react-redux";

const PokemonItem = ({ name }) => {
  const fallbackImg = useSelector(state => state.pokemonReducer.fallbackImg);

  return (
    <div>
      <Link className={classes.link} to={`/pokemon/${name}`}>
        <div className={classes.container}>
          <PokemonImage name={name} fallbackImg={fallbackImg} />
          <PokemonImageText name={name} />
        </div>
      </Link>
    </div>
  );
};

PokemonItem.propTypes = {
  name: PropTypes.string.isRequired
};

PokemonItem.defaultProps = {
  name: "Unkown"
};

export default PokemonItem;
