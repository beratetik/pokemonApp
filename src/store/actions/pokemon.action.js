/* eslint-disable no-unused-expressions */
//API
import api from "../../api/index";

import {
  GET_ALL_POKEMON_SUCCESS,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
  SEARCH_POKEMON_SUCCESS,
  CLEAR_POKEMON,
  LOADING
} from "../constants/actionTypes";

export const setLoading = () => ({
  type: LOADING
});

export const loadSuccess = payload => ({
  type: GET_POKEMON_SUCCESS,
  payload
});

export const loadSuccessAll = payload => ({
  type: GET_ALL_POKEMON_SUCCESS,
  payload
});

export const filterSuccess = payload => ({
  type: SEARCH_POKEMON_SUCCESS,
  payload
});

export const clearPokemon = () => ({
  type: CLEAR_POKEMON
});

export const loadFail = () => ({
  type: GET_POKEMON_FAIL
});

/**
 * requests unique pokemon
 * @param {String} name - Pokemon Name
 */
export const loadPokemon = name => {
  return dispatch => {
    dispatch(setLoading());
    api
      .get(name)
      .then(({ data }) => {
        data && dispatch(loadSuccess(data));
      })
      .catch(err => {
        dispatch(loadFail(err));
      });
  };
};

/**
 * requests all pokemons
 */
export const loadPokemons = (limit = 900) => {
  return dispatch => {
    dispatch(setLoading());
    if (!isNaN(limit)) {
      api
        .get(`?limit=${limit}`)
        .then(({ data }) => {
          data && data.results && dispatch(loadSuccessAll(data.results));
        })
        .catch(() => dispatch(loadFail()));
    } else {
      dispatch(loadFail());
    }
  };
};
