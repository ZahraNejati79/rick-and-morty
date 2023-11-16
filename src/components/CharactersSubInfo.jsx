const CharactersSubInfo = ({
  onAddFavorite,
  selectedCharacter,
  isAddToFavorite,
}) => {
  return (
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
        <div className="actions">
          {isAddToFavorite ? (
            <p>Already Added To Favorite</p>
          ) : (
            <button
              onClick={() => onAddFavorite(selectedCharacter)}
              className="btn btn--primary"
            >
              Add to Favorit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharactersSubInfo;
