const BASE_URL = "https://restcountries.com/v3.1/";

const ALL_COUNTRIES = BASE_URL + "all";

const COUNTRY_DETAIL = (country) => BASE_URL + "name/" + country;

const BORDERS = (codes) => BASE_URL + "alpha?codes=" + codes.join(",");

export { ALL_COUNTRIES, BORDERS, COUNTRY_DETAIL };
