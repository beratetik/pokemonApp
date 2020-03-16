import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PokemonImage from "./PokemonImage";
import ReactImageFallback from "react-image-fallback";

configure({ adapter: new Adapter() });

describe("<PokemonImage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PokemonImage name="" fallbackImg="" />);
    wrapper.setProps({ name: "" });
  });

  it("should render one time", () => {
    expect(wrapper.find(ReactImageFallback)).toHaveLength(1);
  });

  //   it("should render imgSrc to fallbackImg prop, if the name prop is empty", () => {

  //     wrapper = shallow(<PokemonImage name />);
  //     expect(wrapper.find(ReactImageFallback));
  //   });
});
