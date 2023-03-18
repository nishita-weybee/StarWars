import { Link } from "react-router-dom";
import { CHARACTERS, FILMS, PLANETS, SPECIES, STARSHIP, VEHICLES } from "../../../helpers/routeConstants";
import Header from "../../common/header";

const Home = () => {
  const categories = [
    { catName: "Characters", route: CHARACTERS },
    { catName: "Films", route: FILMS },
    { catName: "Species", route: SPECIES },
    { catName: "Starships", route: STARSHIP },
    { catName: "Vehicles", route: VEHICLES },
    { catName: "Planets", route: PLANETS },
  ];
  return (
    <div className="container">
      <Header header="Star Wars" />
      <div className="d-flex justify-content-between flex-wrap gap-4">
        {categories.map((cat, i) => {
          return (
            <Link to={`/${cat.route}`} key={i}>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={`/media/${cat.catName.toLowerCase()}.jpg`} alt="category" />
                <div className="card-body">
                  <h5 className="card-title">{cat.catName}</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
