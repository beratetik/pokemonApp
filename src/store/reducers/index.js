import pokemonReducer from "./pokemonReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  pokemonReducer
});

export default allReducers;
