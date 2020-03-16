import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PokemonItemList from "./PokemonItemList";
import PokemonItem from "../PokemonItem/PokemonItem";
import configureStore from "redux-mock-store";
configure({ adapter: new Adapter() });
const initialState = {
  pokemonsPokemons: [
    { name: "pikachu", url: "https://dummyurl.com/pikachu" },
    { name: "charizard", url: "https://dummyurl.com/charizard" }
  ],
  filteredPokemons: [{ name: "pikachu", url: "https://dummyurl.com/pikachu" }]
};
const mockStore = configureStore(),
  // eslint-disable-next-line no-unused-vars
  store = mockStore(initialState);

describe("<PokemonItemList />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PokemonItemList />);
  });

  it("should render two times", () => {
    expect(wrapper.find(PokemonItem)).toHaveLength(2);
  });
});
