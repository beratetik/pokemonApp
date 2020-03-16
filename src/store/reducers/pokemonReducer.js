const initialState = {
  pokemons: [],
  filteredPokemons: [],
  pokemon: {},
  searchString: "",
  loading: false,
  error: false,
  fallbackImg: "https://i.giphy.com/media/iRZckVpp5vMhG/source.gif"
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        pokemons: action.payload,
        filteredPokemons: action.payload
      };
    case "SEARCH_POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        filteredPokemons: state.pokemons.filter(pokemon =>
          pokemon.name.includes(action.payload)
        )
      };
    case "GET_POKEMON_FAIL":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    case "GET_POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        pokemon: action.payload
      };
    case "CLEAR_POKEMON":
      return {
        ...state,
        loading: false,
        error: false,
        pokemon: {}
      };
    default:
      return state;
  }
};

export default pokemonReducer;
