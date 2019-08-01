import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./pages/PgHome";
import Counter from "./pages/PgCounter";

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
          <NavLink to="/counter" activeClassName="active">
            Counter
          </NavLink>
        </header>
        <Route path="/" component={Home} exact />
        <Route path="/counter" component={Counter} />
      </>
    </BrowserRouter>
  );
}

export default App;
