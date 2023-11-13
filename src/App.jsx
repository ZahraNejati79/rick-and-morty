import "./App.css";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import { allCharacters } from "../data/data";
import CharacterDetail from "./components/CharacterDetail";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList characters={allCharacters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
