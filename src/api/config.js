const BASE_URL = "https://restcountries.com/v3.1/";

const ALL_COUNTRIES = BASE_URL + "all?fields=name,capital,population,region,flags";

const COUNTRY_DETAIL = (country) =>
  BASE_URL +
  "name/" +
  country +
  "/?fields=name,capital,population,region,flags,subregion,tld,currencies,languages,borders";

const BORDERS = (borders) => BASE_URL + `alpha?codes=${borders.join(",")}`;

export { ALL_COUNTRIES, BORDERS, COUNTRY_DETAIL };
