import "./App.css";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import CharacterDetail from "./components/CharacterDetail";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

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

  //axios error handeling / async await

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/characterr"
        );
        setCharacters(data.results);
      } catch (error) {
        console.log(error.response.data.error);
      }
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("something went wrong!");
  //       return res.json();
  //     })
  //     .then((data) => setCharacters(data.results))
  //     .catch((err) => console.log(err.message));
  // }, []);

  //axios / then catch / error handeling
  // useEffect(() => {
  //   axios
  //     .get("https://rickandmortyapi.com/api/characterr")
  //     .then(({ data }) => {
  //       setCharacters(data.results);
  //     })
  //     .catch((error) => console.log(error.response.data.error));
  // }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList characters={characters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
