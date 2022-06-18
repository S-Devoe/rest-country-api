import { FilterCountriesContext } from "../context/FilterContext";
import { BsSearch } from "react-icons/bs";
import { HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/router";
import { useEffect } from "react";
const SearchCountry: any = (): any => {
  const { searchBar, setSearchBar } = FilterCountriesContext();
  const router = useRouter();



  const handleChange = (e: any) => {
    setSearchBar(e.target.value !== "" ? e.target.value : null);
  };

  

  return (
    <div className="searchBar">
      <div className="search_icon">
        <BsSearch />
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={searchBar !== null ? searchBar : ""}
        />
      </div>
      {searchBar !== null && (
        <div className="cancel_icon" onClick={() => setSearchBar(null)}>
          <HiOutlineX />
        </div>
      )}
    </div>
  );
};
export default SearchCountry;
