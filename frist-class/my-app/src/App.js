import "./App.css";
import ItemList from "./components/ItemList";
import NewExpense from "./components/NewExpense";
import React from "react";
import ItemProvider from "./store/ItemProvider";

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <NewExpense></NewExpense>
        <ItemList></ItemList>
      </ItemProvider>
    </div>
  );
}

export default App;
