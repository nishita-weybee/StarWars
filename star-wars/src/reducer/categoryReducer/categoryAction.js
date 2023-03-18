import {
  CHARACTERS_LIST_FAILURE,
  CHARACTERS_LIST_REQUEST,
  CHARACTERS_LIST_SUCCESS,
  FILMS_LIST_FAILURE,
  FILMS_LIST_REQUEST,
  FILMS_LIST_SUCCESS,
  PLANETS_LIST_FAILURE,
  PLANETS_LIST_REQUEST,
  PLANETS_LIST_SUCCESS,
  SPECIES_LIST_FAILURE,
  SPECIES_LIST_SUCCESS,
  STARSHIPS_LIST_FAILURE,
  STARSHIPS_LIST_REQUEST,
  STARSHIPS_LIST_SUCCESS,
  VEHICLES_LIST_FAILURE,
  VEHICLES_LIST_REQUEST,
  VEHICLES_LIST_SUCCESS,
} from "../actionTypes";
import { getCharactersList, getFilmsList, getPlanetsList, getSpeciesList, getStarshipsList, getVehiclesList } from "./categoryService";

const request = (type) => {
  return { type: type };
};
const success = (type, data) => {
  return { type: type, payload: data };
};
const failure = (type, err) => {
  return { type: type, payload: err };
};

export const fetchCharactersList = () => {
  return (dispatch) => {
    dispatch(request(CHARACTERS_LIST_REQUEST));
     getCharactersList().then(
      (result) => {
        dispatch(success(CHARACTERS_LIST_SUCCESS, result));
      },
      (error) => {
        dispatch(failure(CHARACTERS_LIST_FAILURE, error.message));
      }
    );
  };
};

export const fetchFilmsList = () => {
  return (dispatch) => {
    dispatch(request(FILMS_LIST_REQUEST));
    return getFilmsList().then(
      (result) => {
        dispatch(success(FILMS_LIST_SUCCESS, result));
      },
      (error) => {
        dispatch(failure(FILMS_LIST_FAILURE, error.message));
      }
    );
  };
};

export const fetchStarshipsList = () => {
  return (dispatch) => {
    dispatch(request(STARSHIPS_LIST_REQUEST));
    return getStarshipsList().then(
      (result) => {
        dispatch(success(STARSHIPS_LIST_SUCCESS, result));
      },
      (error) => {
        dispatch(failure(STARSHIPS_LIST_FAILURE, error.message));
      }
    );
  };
};

export const fetchPlanetsList = () => {
  return (dispatch) => {
    dispatch(request(PLANETS_LIST_REQUEST));
    return getPlanetsList().then(
      (result) => {
        dispatch(success(PLANETS_LIST_SUCCESS, result));
      },
      (error) => {
        dispatch(failure(PLANETS_LIST_FAILURE, error.message));
      }
    );
  };
};

export const fetchVehiclesList = () => {
  return (dispatch) => {
    dispatch(request(VEHICLES_LIST_REQUEST));
    return getVehiclesList().then(
      (result) => {
        dispatch(success(VEHICLES_LIST_SUCCESS, result));
      },
      (error) => {
        dispatch(failure(VEHICLES_LIST_FAILURE, error.message));
      }
    );
  };
};

export const fetchSpeciesList = () => {
  return (dispatch) => {
    dispatch(request(CHARACTERS_LIST_REQUEST));
    return getSpeciesList().then(
      (result) => {
        dispatch(success(SPECIES_LIST_SUCCESS, result));
      },
      (error) => {
        dispatch(failure(SPECIES_LIST_FAILURE, error.message));
      }
    );
  };
};
