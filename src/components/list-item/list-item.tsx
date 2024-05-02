import { FC } from "react";
import { UniversityType } from "../../models/university-model";
import { Link } from "react-router-dom";

import "./list-item.scss";

const UniversityListItem: FC<{ university: UniversityType }> = ({
  university,
}) => {
  return (
    <Link
      to={`/university-details/?${new URLSearchParams({
        name: university.name ?? "",
        domains: JSON.stringify(university.domains ?? []),
        stateProvince: university["state-province"] ?? "",
        web_pages: JSON.stringify(university.web_pages ?? []),
        country: university.country ?? "",
        alpha_two_code: university.alpha_two_code ?? "",
      }).toString()}`}
      className="list-item"
    >
      <p>{university.name}</p>
    </Link>
  );
};

export default UniversityListItem;
