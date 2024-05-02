import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchUniversities } from "../../services/universities";
import { UniversityType } from "../../models/university-model";
import UniversityListItem from "../../components/list-item/list-item";

import "./home.scss";
import Filters from "../../components/filters/filters";

function Home() {
  const [universities, setUniversities] = useState<UniversityType[]>();
  const [filteredUniversities, setFilteredUniversities] =
    useState<UniversityType[]>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // fetching universities list on first load
    setIsLoading(true);
    fetchUniversities()
      .then((universitieslist) => {
        setUniversities([...universitieslist]);
        setFilteredUniversities([...universitieslist]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const universitiesList = useMemo(() => {
    return filteredUniversities?.map((university) => {
      return (
        <UniversityListItem university={university} key={university.name} />
      );
    });
  }, [filteredUniversities]);

  const onFiltersChange = useCallback((newUniversities: UniversityType[]) => {
    setFilteredUniversities([...newUniversities]);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="page-title">UAE Universities List</div>
      {isLoading ? (
        <div className="loading">Loading Universities...</div>
      ) : (
        <div className="universities-list-wrapper">
          <Filters universities={universities} onChange={onFiltersChange} />
          <div className="universities-list">{universitiesList}</div>
        </div>
      )}
    </div>
  );
}

export default Home;
