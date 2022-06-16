const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const capitalizeText = (text: string | null) => {
  return text === null ? null : text.charAt(0).toUpperCase() + text.slice(1);
};

const removeAccents = (text: string) =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

const countryNameToUri = (name: string) => {
  return removeAccents(
    name.split("(")[0].trim().replace(/ /g, "-").toLowerCase()
  );
};

const uriToCountryName = (uri: string) => {
  return removeAccents(
    uri
      .replace(/-/, " ")
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
  );
};

const DataFormatter = {
  formatNumber,
  capitalizeText,
  removeAccents,
  countryNameToUri,
  uriToCountryName,
};
export default DataFormatter;
