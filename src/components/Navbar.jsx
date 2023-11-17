import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import { useState } from "react";
import Character from "./Character";
const Navbar = ({
  query,
  setQuery,
  characters,
  favorites,
  onDeleteFavorite,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO</div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="text-field"
        placeholder="search..."
      />
      <div className="navbar__result">Found {characters} characters</div>
      <Modal title="modal" openModal={openModal} setOpenModal={setOpenModal}>
        {favorites.map((item) => (
          <Character key={item.id} item={item} onSelecteCharacter={() => {}}>
            <button
              className="icon red"
              onClick={() => onDeleteFavorite(item.id)}
            >
              <TrashIcon />
            </button>
          </Character>
        ))}
      </Modal>
      <button className="heart" onClick={() => setOpenModal(true)}>
        <HeartIcon className="icon" />
        <span className="badge">{favorites.length}</span>
      </button>
    </nav>
  );
};

export default Navbar;
