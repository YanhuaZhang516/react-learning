import "./App.css";
import ItemList from "./components/ItemList";
import NewExpense from "./components/NewExpense";

function App() {
  return (
    <div className="App">
      <NewExpense></NewExpense>
      <ItemList></ItemList>
    </div>
  );
}

export default App;
