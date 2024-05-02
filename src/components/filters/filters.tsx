import { FC, useEffect, useState } from "react";
import { UniversityType } from "../../models/university-model";
import {
  filterUniversitiesByState,
  getStatesList,
  searchUniversities,
  sortUniversitiesByName,
} from "../../utils/universities-utils";
import "./filters.scss";

type FiltersType = {
  universities?: UniversityType[];
  onChange: (newUniversities: UniversityType[]) => void;
};

const Filters: FC<FiltersType> = ({ universities, onChange }) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>();
  const [selectedState, setSelectedState] = useState<string>();
  const [querey, setQuerey] = useState<string>();

  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    setStates(getStatesList(universities));
  }, [universities]);

  useEffect(() => {
    const sortedUniversities = sortUniversitiesByName(
      universities,
      sortDirection
    );
    const stateFilteredUniversities = filterUniversitiesByState(
      sortedUniversities,
      selectedState
    );

    const searchedUniversities = searchUniversities(
      stateFilteredUniversities,
      querey
    );

    onChange(searchedUniversities);
  }, [onChange, querey, selectedState, sortDirection, universities]);

  return (
    <div className="search-wrapper">
      <div className="search-input-wrapper">
        <input
          className="search-input"
          onChange={(event) => setQuerey(event.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="filter-wrapper">
        <div className="sort">
          <label htmlFor="sort">Sort</label>
          <select
            id="sort"
            onChange={(event) => {
              setSortDirection(event.target.value as "asc" | "desc");
            }}
          >
            <option></option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div className="state-filter-wrapper">
          <label htmlFor="state-select">State</label>
          <select
            id="state-select"
            onChange={(event) => {
              setSelectedState(event.target.value);
            }}
          >
            <option></option>
            {states.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
