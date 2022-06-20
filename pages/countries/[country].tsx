import { count } from "console";
import { AnyTxtRecord } from "dns";
import type { GetStaticPaths, GetStaticProps } from "next";
import CountryDetails from "../../components/CountryDetails";
import DataFormatter from "../../context/DataFormatter";

const CountryPage = ({ country }: any) => {
  return (
    <>
      <CountryDetails country={country} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const countryNames = await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) =>
      data.map(
        (item: any) => item.name.common.toLowerCase()

        // uriToCountryName is to change the space in the country name
        // to dash, that is united kingdom to united-kingdom
        // because of the URL in the browser
      )
    );

  console.log(countryNames);

  const countryNamesWithDash = countryNames.map((item: string) =>
    item.trim().replace(/ /g, "-")
  );

  console.log(countryNamesWithDash);

  const paths = countryNamesWithDash.map((country: string) => ({
    params: { country: country },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  // turn the dash in the url back to space
  const countryName = context.params.country.replace(/-/g, " ");
  console.log(countryName + " is the country name");

  let response;
  if (countryName === "china") {
    response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
  } else {
    response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
  }

  console.log(response);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const countryDetails = await response.json();

  console.log(countryDetails);

  const loadingBorder: Array<string> = [];
  if (countryDetails[0].borders) {
    for (const border of countryDetails[0].borders) {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${border}`
      );
      const countryBordersInText = await response.json();
      // console.log(countryBordersInText);
      loadingBorder.push(countryBordersInText[0].name.common.toLowerCase());
    }
  }

  // console.log(loadingBorder);

  const getLanguages = [];

  // Get the key from the object first
  for (const key in countryDetails[0].languages) {
    // then use the key to get the value, just like we do with index when dealing with arrays
    getLanguages.push(countryDetails[0].languages[key]);
  }

  const getNativeNames = [];

  // if the country has a native name
  if (countryDetails[0].name.nativeName) {
    for (const key in countryDetails[0].name.nativeName) {
      getNativeNames.push(countryDetails[0].name.nativeName[key].official);
    }
  }

  const getCurrency = [];
  // if the country owns a currency
  if (countryDetails[0].currencies) {
    for (const key in countryDetails[0].currencies) {
      getCurrency.push(countryDetails[0].currencies[key].name);
    }
  }
  // console.log(countryDetails[0].capital);

  const border = countryDetails[0].borders
    ? loadingBorder
    : "This country has no borders";

  return {
    props: {
      country: {
        name: countryDetails[0].name.common,
        nativeName: getNativeNames,
        population: countryDetails[0].population,
        region: countryDetails[0].region,
        subRegion: countryDetails[0].subregion || null,
        capital: countryDetails[0].capital
          ? countryDetails[0].capital
          : "This country has no capital",
        topLevelDomain: countryDetails[0].tld || null,
        currencies: getCurrency,
        languages: getLanguages,
        borders: border,
        flag: countryDetails[0].flags.png,
      },
    },
  };
};

export default CountryPage;
