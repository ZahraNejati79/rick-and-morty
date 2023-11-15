import { HeartIcon } from "@heroicons/react/24/outline";
const Navbar = ({ query, setQuery, characters, numOfFavorite }) => {
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
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">{numOfFavorite}</span>
      </button>
    </nav>
  );
};

export default Navbar;
