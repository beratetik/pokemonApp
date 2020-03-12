import React from "react";
import PropTypes from "prop-types";

// let x;

const App = props => {
  return <div>{props.name}</div>;
};

App.propTypes = {
  name: PropTypes.string
};
App.defaultProps = {
  name: "Test"
};

export default App;
