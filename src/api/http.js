import axios from "axios";
import { ALL_COUNTRIES, BORDERS, COUNTRY_DETAIL } from "../api/config";

export const fetchCountries = async () => {
  const response = await axios.get(ALL_COUNTRIES);
  return response.data;
};

export const fetchDetails = async (country) => {
  const response = await axios.get(COUNTRY_DETAIL(country));
  return response.data;
};

export const fetchBorders = async (borders) => {
  const response = await axios.get(BORDERS(borders));
  return response.data;
};
