import React from "react";
import PropTypes from "prop-types";
import classes from "./PokemonInfoItem.module.css";

const WrapperComponent = ({ info, type = "singleLine" }) => {
  return (
    <div className={classes.inline}>
      {type === "singleLine" ? <span>{info}</span> : <ul>{info}</ul>}
    </div>
  );
};

WrapperComponent.propTypes = {
  type: PropTypes.string,
  info: PropTypes.oneOfType([PropTypes.array, PropTypes.number])
};

const PokemonInfoItem = ({ value, label, type = "singleLine" }) => {
  if (value instanceof Array) {
    value = value.map((val, i) => {
      return type === "list" ? (
        <li key={i}>
          {val.ability.name} -{" "}
          {val.is_hidden ? "(Hidden  Ability)" : "(Known Ability)"}
        </li>
      ) : (
        <span key={val.slot}>
          {val.type.name}
          {value.length - 1 !== i && ", "}
        </span>
      );
    });
  }

  return (
    <div className={classes.info}>
      <b>{label}: </b>
      <WrapperComponent type={type} info={value} />
    </div>
  );
};

PokemonInfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number
  ]),
  type: PropTypes.string
};

export default PokemonInfoItem;
