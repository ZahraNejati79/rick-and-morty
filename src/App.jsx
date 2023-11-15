import "./App.css";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import CharacterDetail from "./components/CharacterDetail";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(1);
  const [favorits, setFavorits] = useState([]);

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

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `  https://rickandmortyapi.com/api/character/?name=${query}`,
          { signal }
        );

        setCharacters(data.results.slice(0, 5));
      } catch (error) {
        if (!axios.isCancel()) {
          console.log(error.response.data.error);
          setCharacters([]);
        }
      }
    }

    fetchData();

    return () => {
      console.log("abort");
      controller.abort();
    };
  }, [query]);

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
    setFavorits((prevCharacters) => [...prevCharacters, character]);
  };

  const isAddToFavorite = favorits
    .map((favorite) => favorite.id)
    .includes(selectedId);

  return (
    <div className="app">
      <Navbar
        characters={characters.length}
        query={query}
        setQuery={setQuery}
        numOfFavorite={favorits.length}
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
