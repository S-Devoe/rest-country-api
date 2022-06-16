const baseURL = "https://restcountries.com/v3.1";

const getAllCountries = async () => {
  return fetch(baseURL + "/all").then((data) => {
    return data.json();
  });
};

const getCountryName = async (name: string) => {
  return fetch(baseURL + "/name/" + name).then((data) => {
    return data.json();
  });
};

const getCountryByCode = async (codes: string[]) => {
  return fetch(baseURL + "/alpha?codes=" + codes.join(",")).then((data) => {
    return data.json();
  });
};

const Countries = {
  getAllCountries,
  getCountryName,
  getCountryByCode,
};

export default Countries;
