import { useState } from "react";
import { FilterCountriesContext } from "../context/FilterContext";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const RegionFilter = () => {
  const { region, setRegion } = FilterCountriesContext();
  const [open, setOpen] = useState(false);

  const regions = ["none", "africa", "americas", "asia", "europe", "oceania"];

  const handleRegionSelected = (reg: string) => {
    if (reg === "none") {
      setRegion(null);
    } else {
      setRegion(reg);
    }

    setOpen(false)
  };

  

  return (
    <div className="region_filter">
      <button
        className="select_region"
        onClick={(e) => {
          e.preventDefault();
          setOpen((prev) => !prev);
        }}
      >
        <span className="select_region_text">
          {region === null ? "Filter by Region" : region}
        </span>
        <span className="icons">
          {open ? <BiChevronUp /> : <BiChevronDown />}
        </span>
      </button>
      {open && (
        <ul className="regions_list">
          {regions.map((reg, index) => (
            <li key={index} onClick={() => handleRegionSelected(reg)}>
              {reg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default RegionFilter;
