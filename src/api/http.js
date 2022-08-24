import axios from "axios";
import { ALL_COUNTRIES, COUNTRY_DETAIL } from "../api/config";

export const fetchCountries = async () => {
  const response = await axios.get(ALL_COUNTRIES);
  return response.data;
};

export const fetchDetails = async (country) => {
  const response = await axios.get(COUNTRY_DETAIL(country));
  return response.data;
};
