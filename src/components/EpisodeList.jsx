import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const EpisodeList = ({ episodes }) => {
  const [isSorted, setIsSorted] = useState(true);
  let sortedEpisodes;
  if (isSorted) {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }

  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of Episodes</h2>
        <button onClick={() => setIsSorted((is) => !is)}>
          <ArrowUpCircleIcon
            className="icon"
            style={{ rotate: isSorted ? "0deg" : "180deg" }}
          />
        </button>
      </div>
      <ul>
        {sortedEpisodes.map((item, index) => (
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
  );
};

export default EpisodeList;
