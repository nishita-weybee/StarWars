import axios from "axios";
import { axiosInstance } from "../../helpers/apiRequest";

export const getCharactersList = async () => {
  const res = await axiosInstance.get(`/people`);
  return res.data;
};
export const getFilmsList = async () => {
  const res = await axiosInstance.get(`films`);
  return res.data;
};

export const getVehiclesList = async () => {
  const res = await axiosInstance.get(`vehicles`);
  return res.data;
};

export const getSpeciesList = async () => {
  const res = await axiosInstance.get(`species`);
  return res.data;
};

export const getPlanetsList = async () => {
  const res = await axiosInstance.get(`planets`);
  return res.data;
};

export const getStarshipsList = async () => {
  const res = await axiosInstance.get(`starships`);
  return res.data;
};
