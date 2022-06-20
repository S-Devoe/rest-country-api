import { useEffect, useState } from "react";
import Countries from "../context/apiContext";
import CountryTypes from "../context/countriesType";
import LoadingAnimation from "./LoadingAnimation";
import { FilterCountriesContext } from "../context/FilterContext";
import Link from "next/link";
import DataFormatter from "../context/DataFormatter";
import Image from "next/image";
import SearchCountry from "./SearchCountry";
import RegionFilter from "./RegionFilter";
import Router from "next/router";

function CountriesList(): JSX.Element {
  const [countriesData, setCountriesData] = useState<CountryTypes[]>([]);
  const { filterCountries, region, searchBar } = FilterCountriesContext();
  useEffect(() => {
    const countries = Countries.getAllCountries();
    countries.then((data) => setCountriesData(data));
  }, []);

  // console.log(countriesData)

  let countriesContent;
  const loading = countriesData.length === 0;

  if (loading) {
    countriesContent = <LoadingAnimation />;
  } else {
    countriesContent = filterCountries(countriesData).map((country, index) => (
      <Link
        href={`countries/${country.name.common
          .toLowerCase()
          .replace(/ /g, "-")}`}
        key={index}
      >
        <div className="country_card">
          <div className="flag">
            {/* eslint-disable-next-line  */}
            <img src={country.flags.png} alt={`${country.name} flag`} />
          </div>
          <div className="country_information">
            <h2 className="name">{country.name.common}</h2>
            <ul className="lists">
              <li>
                <span>Population: </span>
                {DataFormatter.formatNumber(country.population)}
              </li>
              <li>
                <span>Region: </span>
                {country.region}
              </li>
              <li>
                <span>Capital: </span>
                {country.capital ? country.capital : "No Capital"}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    ));
    // If no countries available after filters
    if (countriesContent.length === 0) {
      countriesContent = (
        <div>
          <h2>
            {region === null
              ? DataFormatter.capitalizeText(searchBar) +
                "  seems not to be a country on our earth!"
              : DataFormatter.capitalizeText(searchBar) +
                " seems not to be found in " +
                region +
                "! / check that you spelt the country correctly"}
          </h2>
        </div>
      );
    }
  }
  return (
    <section className="wrapper">
      <div className="filters">
        <SearchCountry />
        <RegionFilter />
      </div>
      <div className="countries_list">{countriesContent}</div>
    </section>
  );
}
export default CountriesList;
