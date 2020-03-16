import React from "react";
import PropTypes from "prop-types";
import PokemonInfoItem from "../PokemonInfoItem/PokemonInfoItem";

const PokemonInfo = ({ info }) => {
  const { id, types, height, abilities } = info;

  return (
    <div>
      {id && <PokemonInfoItem value={id} label={"ID"} />}
      {height && <PokemonInfoItem value={height} label={"Height"} />}
      {types && <PokemonInfoItem value={types} label={"Types"} />}
      {abilities && (
        <PokemonInfoItem value={abilities} label={"Abilities"} type="list" />
      )}
    </div>
  );
};

PokemonInfo.propTypes = {
  info: PropTypes.object
};

export default PokemonInfo;
