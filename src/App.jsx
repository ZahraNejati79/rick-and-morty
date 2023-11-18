import "./App.css";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import CharacterDetail from "./components/CharacterDetail";
import { useState } from "react";
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [query, setQuery] = useState("");
  const { characters } = useCharacters(query);
  const [selectedId, setSelectedId] = useState(1);
  const [favorites, setFavorites] = useLocalStorage("FAVORITES", []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch("https://rickandmortyapi.com/api/character");
  //       if (!res.ok) throw new Error("something went wrong");
  //       const data = await res.json();
  //       setCharacters(data.results);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   fetchData();
  // }, []);

  //axios error handling / async await

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("something went wrong!");
  //       return res.json();
  //     })
  //     .then((data) => setCharacters(data.results))
  //     .catch((err) => console.log(err.message));
  // }, []);

  //axios / then catch / error handling
  // useEffect(() => {
  //   axios
  //     .get("https://rickandmortyapi.com/api/characterr")
  //     .then(({ data }) => {
  //       setCharacters(data.results);
  //     })
  //     .catch((error) => console.log(error.response.data.error));
  // }, []);

  const handleSelectCharacter = (id) => {
    setSelectedId(id);
  };

  const handleAddFavorite = (character) => {
    setFavorites((prevCharacters) => [...prevCharacters, character]);
  };

  const handleDeleteFavorite = (id) => {
    setFavorites((prevFav) => prevFav.filter((item) => item.id !== id));
  };

  const isAddToFavorite = favorites
    .map((favorite) => favorite.id)
    .includes(selectedId);

  return (
    <div className="app">
      <Navbar
        characters={characters.length}
        query={query}
        setQuery={setQuery}
        favorites={favorites}
        onDeleteFavorite={handleDeleteFavorite}
      />
      <div className="main">
        <CharacterList
          characters={characters}
          onSelecteCharacter={handleSelectCharacter}
        />
        <CharacterDetail
          selectedId={selectedId}
          onAddFavorite={handleAddFavorite}
          isAddToFavorite={isAddToFavorite}
        />
      </div>
    </div>
  );
}

export default App;
