import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
const CharacterDetail = ({ selectedId }) => {
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
      <div className="character-detail">
        <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          className="character-detail__img"
        />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{selectedCharacter.gender === "Male" ? "" : ""}</span>
            <span>{selectedCharacter.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${
                selectedCharacter.status === "Dead" ? "red" : ""
              }`}
            ></span>
            <span>
              &nbsp;{selectedCharacter.status} - {selectedCharacter.species}
            </span>
          </div>
          <div className="location">
            <p>Last konw location</p>
            <p>{selectedCharacter.location.name}</p>
          </div>
          <div className="action">
            <button className="btn btn--primary">Add to Favorit</button>
          </div>
        </div>
      </div>
      <div className="character-episodes">
        <div className="title">
          <h2>List of Episodes</h2>
          <button>
            <ArrowUpCircleIcon className="icon" />
          </button>
        </div>
        <ul>
          {episodes.map((item, index) => (
            <li key={index}>
              <div>
                {String(index + 1).padStart(2, "0")} - {item.episode} :
                <strong> {item.name}</strong>
              </div>
              <div className="badge badge--secondary">{item.air_date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
