import React from "react";
import PropTypes from "prop-types";
import { firstLetterUpperCase } from "../../helper/helper";
import { span } from "./PokemonImageText.module.css";

const PokemonImageText = ({ name }) => {
  return <span className={span}>{firstLetterUpperCase(name)}</span>;
};

PokemonImageText.propTypes = {
  name: PropTypes.string.isRequired
};

PokemonImageText.defaultProps = {
  name: "Unkown Pokemon"
};

export default PokemonImageText;
