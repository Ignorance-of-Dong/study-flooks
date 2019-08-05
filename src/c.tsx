import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./pages/PgHome";
import PgInput from "./pages/PgInput";
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
          <NavLink to="/input" activeClassName="active">
            input
          </NavLink>
        </header>
        <Route path="/" component={Home} exact />
        <Route path="/counter" component={Counter} />
        <Route path="/input" component={PgInput} />
      </>
    </BrowserRouter>
  );
}

export default App;
