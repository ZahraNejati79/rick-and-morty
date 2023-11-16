import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import CharactersSubInfo from "./CharactersSubInfo";
import EpisodeList from "./EpisodeList";
const CharacterDetail = ({ selectedId, onAddFavorite, isAddToFavorite }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    async function fetchSelectedCharacter() {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        setSelectedCharacter(data);

        const episodesId = data.episode.map((e) => e.split("/").at(-1));
        const { data: episodesData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        setEpisodes([episodesData].flat().slice(0, 6));
      } catch (error) {
        console.log(error.response.data.error);
      }
    }
    fetchSelectedCharacter();
  }, [selectedId]);

  if (!selectedCharacter)
    return (
      <div style={{ color: "var(--slate-300)" }}>please select character</div>
    );
  return (
    <div style={{ flex: 1 }}>
      <CharactersSubInfo
        onAddFavorite={onAddFavorite}
        selectedCharacter={selectedCharacter}
        isAddToFavorite={isAddToFavorite}
      />
      <EpisodeList episodes={episodes} />
    </div>
  );
};

export default CharacterDetail;
