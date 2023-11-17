import { EyeIcon } from "@heroicons/react/24/outline";
import Character from "./Character";

const CharacterList = ({ characters, onSelecteCharacter }) => {
  return (
    <div className="characters-list">
      {characters.map((item) => (
        <Character key={item.id} item={item}>
          <button
            className="icon red"
            onClick={() => onSelecteCharacter(item.id)}
          >
            <EyeIcon />
          </button>
        </Character>
      ))}
    </div>
  );
};

export default CharacterList;
