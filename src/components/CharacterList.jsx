const CharacterList = ({ characters }) => {
  return (
    <div className="characters-list">
      {characters.map((item) => (
        <Character item={item} />
      ))}
    </div>
  );
};

export default CharacterList;

const Character = ({ item }) => {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.name} />
      <h3 className="name">
        <span>{item.gender === "Male" ? "" : ""}</span>
        <span>{item.name}</span>
      </h3>
      <div className="list-item__info info">
        <span
          className={`status ${item.status === "Dead" ? "red" : ""}`}
        ></span>
        <span> {item.status}</span>
        <span> {item.species}</span>
      </div>
    </div>
  );
};
