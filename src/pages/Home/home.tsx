import { useEffect, useMemo, useState } from "react";
import { fetchUniversities } from "../../services/universities";
import { UniversityType } from "../../models/university-model";
import UniversityListItem from "../../components/list-item/list-item";

import "./home.scss";

function Home() {
  const [universities, setUniversities] = useState<UniversityType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // fetching universities list on first load
    setIsLoading(true);
    fetchUniversities()
      .then((universitieslist) => {
        setUniversities(universitieslist);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const universitiesList = useMemo(() => {
    return universities?.map((university) => {
      return (
        <UniversityListItem university={university} key={university.name} />
      );
    });
  }, [universities]);

  return (
    <div className="home-wrapper">
      <div className="page-title">UAE Universities List</div>
      {isLoading ? (
        <div className="loading">Loading Universities...</div>
      ) : (
        <div className="universities-list-wrapper">
          <div className="universities-list">{universitiesList}</div>
        </div>
      )}
    </div>
  );
}

export default Home;
