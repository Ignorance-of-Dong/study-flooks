import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./pages/PgHome";
import PgInput from "./pages/PgInput";
import Counter from "./pages/PgCounter";
import Rnducer from "./pages/PgReducer";
import Ref from "./pages/PgRef";

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
          <NavLink to="/reducer" activeClassName="active">
            reducer
          </NavLink>
          <NavLink to="/ref" activeClassName="active">
            ref
          </NavLink>
        </header>
        <Route path="/" component={Home} exact />
        <Route path="/counter" component={Counter} />
        <Route path="/input" component={PgInput} />
        <Route path="/reducer" component={Rnducer} />
        <Route path="/ref" component={Ref} />
      </>
    </BrowserRouter>
  );
}

export default App;
