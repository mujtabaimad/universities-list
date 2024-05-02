import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UniversityType } from "../../models/university-model";

import "./university-details.scss";

function UniversityDetails() {
  const [URLSearchParams] = useSearchParams();

  const [university, setUniversity] = useState<UniversityType>();

  useEffect(() => {
    const name = URLSearchParams.get("name") ?? "";
    const domainsString = URLSearchParams.get("domains") ?? "";
    const domains = domainsString ? JSON.parse(domainsString) : [];
    const stateProvince = URLSearchParams.get("stateProvince") ?? "";
    const web_pagesString = URLSearchParams.get("web_pages") ?? "";
    const web_pages = web_pagesString ? JSON.parse(web_pagesString) : [];
    const country = URLSearchParams.get("country") ?? "";
    const alpha_two_code = URLSearchParams.get("alpha_two_code") ?? "";

    setUniversity({
      name,
      domains,
      "state-province": stateProvince,
      web_pages,
      country,
      alpha_two_code,
    });
  }, [URLSearchParams]);

  const domains = useMemo(() => {
    if (university?.domains?.length) {
      return (
        <div>
          <p>Domains</p>
          <ul>
            {university?.domains.map((domain) => {
              return <li>{domain}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <></>;
    }
  }, [university?.domains]);

  const country = useMemo(() => {
    if (university?.country) {
      return (
        <div>
          <p>Country: {university?.country}</p>
        </div>
      );
    } else {
      return <></>;
    }
  }, [university?.country]);

  const stateProvince = useMemo(() => {
    if (university?.["state-province"]) {
      return (
        <div>
          <p>State Province: {university["state-province"]}</p>
        </div>
      );
    } else {
      return <></>;
    }
  }, [university]);

  const webPages = useMemo(() => {
    if (university?.web_pages?.length) {
      return (
        <div>
          <p>Web Pages</p>
          <ul>
            {university?.web_pages.map((webPage) => {
              return <li>{webPage}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <></>;
    }
  }, [university?.web_pages]);

  return (
    <div className="university-details-wrapper">
      <div className="page-title">
        <p>{university?.name}</p>
      </div>
      <div className="info-wrapper">
        {country}
        {stateProvince}
        {domains}
        {webPages}
      </div>
    </div>
  );
}

export default UniversityDetails;
