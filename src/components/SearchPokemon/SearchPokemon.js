import React from "react";
import PropTypes from "prop-types";
import classes from "./SearchPokemon.module.css";
import { useDispatch } from "react-redux";
import { filterSuccess } from "../../store/actions/pokemon.action";

const SearchPokemon = ({ type, placeholder, disabled }) => {
  const dispatch = useDispatch();

  const filterHandler = val => {
    dispatch(filterSuccess(val.toLocaleLowerCase()));
  };

  return (
    <div>
      <input
        className={`${classes.input} ${disabled ? classes.disabled : ""}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={e => filterHandler(e.target.value)}
      />
    </div>
  );
};

SearchPokemon.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  filterHandler: PropTypes.func
};

SearchPokemon.defaultProps = {
  type: "text",
  placeholder: "Gotta catch'em all!",
  disabled: true,
  filterHandler: () => {}
};

export default SearchPokemon;
