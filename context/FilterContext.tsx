import { useContext, createContext, ReactNode, useState } from "react";
import CountryTypes from "./countriesType";
import DataFormatter from "./DataFormatter";

interface Prop {
  children: ReactNode;
}

interface filtersInterface {
  searchBar: string | null;
  setSearchBar: (value: string | null) => void;
  region: string | null;
  setRegion: (value: string | null) => void;
  filterCountries: (countries: CountryTypes[]) => CountryTypes[];
}

const initialFilter = {
  searchBar: null,
  setSearchBar: () => {},
  region: null,
  setRegion: () => {},
  filterCountries: () => [],
};

export const FilterContext = createContext<filtersInterface>(initialFilter);

export const FilterCountriesContext = () => {
  return useContext(FilterContext);
};

function FilterContextProvider({ children }: any) {
  const [searchBar, setSearchBar] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);

  //   Filter by region function
  const filterByRegion = (countries: CountryTypes[]) => {
    return region !== null
      ? countries.filter((country) => country.region.toLowerCase() === region)
      : countries;
  };

  //   Filter by name function
  const filterByCountryName = (countriesData: CountryTypes[]) => {
  
    return searchBar !== null
      ? countriesData.filter((country) =>
          DataFormatter.removeAccents(country.name.common)
            .toLowerCase()
            .includes(searchBar.toLowerCase())
        )
      : countriesData;
  };

  //   filter Countries
  const filterCountries = (countries: CountryTypes[]) => {
    const filtered = filterByRegion(filterByCountryName(countries));
    return filtered.length === 0 ? [] : filtered;
  };

  return (
    <FilterContext.Provider
      value={{
        region,
        setRegion,
        searchBar,
        setSearchBar,
        filterCountries,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;
