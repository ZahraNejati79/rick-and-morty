import axios from "axios";
import { useEffect, useState } from "react";

export default function useCharacters(query) {
  const [characters, setCharacters] = useState([]);
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
          console.log(error.message);
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
  return { characters };
}
