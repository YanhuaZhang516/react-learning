import "./App.css";
import Item from "./components/item";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <div className="expenses">
        <ItemList></ItemList>
      </div>
    </div>
  );
}

export default App;
