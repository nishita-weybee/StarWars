import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Characters from "./component/pages/characters/Characters";
import Films from "./component/pages/films/Films";
import Home from "./component/pages/home/Home";
import Planets from "./component/pages/planets/Planets";
import Species from "./component/pages/species/Species";
import Starships from "./component/pages/starships/Starships";
import Vehicles from "./component/pages/vehicles/Vehicles";
import { CHARACTERS, FILMS, PLANETS, SPECIES, STARSHIP, VEHICLES } from "./helpers/routeConstants";
import "./index.scss";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={`/${CHARACTERS}`} element={<Characters />} />
        <Route path={`/${STARSHIP}`} element={<Starships />} />
        <Route path={`/${VEHICLES}`} element={<Vehicles />} />
        <Route path={`/${PLANETS}`} element={<Planets />} />
        <Route path={`/${SPECIES}`} element={<Species />} />
        <Route path={`/${FILMS}`} element={<Films />} />
      </Routes>
    </Provider>
  );
}

export default App;
