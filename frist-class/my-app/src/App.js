import "./App.css";
import ItemList from "./components/ItemList";
import NewExpense from "./components/NewExpense";
import React from "react";
import ItemProvider from "./store/ItemProvider";
import { Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <Route path="/test1">
          <NavLink activeClassName={NewExpense.active} to="/test1">
            <div className="nav1">
              <h1>All expense</h1>
            </div>
            <NewExpense></NewExpense>
          </NavLink>
        </Route>
        <Route path="/test2">
          <NavLink activeClassName={ItemList.active} to="/test2">
            <ItemList></ItemList>
          </NavLink>
        </Route>
      </ItemProvider>
    </div>
  );
}

export default App;
