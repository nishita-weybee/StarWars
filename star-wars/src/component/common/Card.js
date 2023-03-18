const Card = ({ cardData }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between gap-4  ">
      {cardData.results.map((data, i) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`} alt="star-war" />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
