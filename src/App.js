import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Pokemons from "./pages/Pokemons/Pokemons";
import Pokemon from "./pages/Pokemon/Pokemon";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Redirect exact from="/" to="/pokemon" />
        <Route path="/pokemon" exact component={Pokemons} />
        <Route path="/pokemon/:name" exact component={Pokemon} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
