import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PokemonItemList from "../../components/PokemonItemList/PokemonItemList";
import { useDispatch, useSelector } from "react-redux";
import { loadPokemons } from "../../store/actions/pokemon.action";
import querystring from "querystring";
import classes from "./Pokemons.module.css";

const WrapperPokemons = ({ children }) => {
  const gotoPage = () => (window.location.href = "https://immfly.com/");
  return (
    <div>
      <img className={classes.immflyLogo} onClick={gotoPage} />
      <img className={classes.pokemonLogo} />
      {children}
      <img className={classes.pokemonQuote} />
    </div>
  );
};

WrapperPokemons.propTypes = {
  children: PropTypes.object
};

const Pokemons = ({ location }) => {
  const qs = querystring.parse(location.search.slice(1));
  const dispatch = useDispatch();

  //Getting pokemons from redux' state
  const pokemons = useSelector(state => state.pokemonReducer.pokemons);

  // Fetching pokemons
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    !pokemons.length && dispatch(loadPokemons(qs.limit));
  }, []);

  return (
    <div>
      <WrapperPokemons>
        <PokemonItemList pokemons={pokemons} />
      </WrapperPokemons>
    </div>
  );
};

Pokemons.propTypes = {
  location: PropTypes.object
};

Pokemons.defaultProps = {
  location: {}
};

export default Pokemons;
