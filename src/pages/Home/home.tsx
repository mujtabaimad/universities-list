import { useEffect, useMemo, useState } from "react";
import { fetchUniversities } from "../../services/universities";
import { UniversityType } from "../../models/university-model";
import UniversityListItem from "../../components/list-item/list-item";

import "./home.scss"

function Home() {
  const [universities, setUniversities] = useState<UniversityType[]>();

  useEffect(() => {
    // fetching universities list on first load
    fetchUniversities()
      .then((universitieslist) => {
        setUniversities(universitieslist);
      })
      .catch(() => {
        // TODO chech localStorage if the api fetch faild
      });
  }, []);

  const universitiesList = useMemo(() => {
    return universities?.map((university) => {
      return <UniversityListItem university={university} key={university.name}/>;
    });
  }, [universities]);

  return (
    <div className="home-wrapper">
      <div className="page-title">Universities List</div>
      <div className="universities-list">{universitiesList}</div>
    </div>
  );
}

export default Home;
