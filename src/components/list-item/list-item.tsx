import { FC } from "react";
import { UniversityType } from "../../models/university-model";
import { Link } from "react-router-dom";

import "./list-item.scss"

const UniversityListItem: FC<{ university: UniversityType }> = ({
  university,
}) => {
  return (
    <Link to={`/university-details/${university.name}`} className="list-item">
      <p>{university.name}</p>
    </Link>
  );
};

export default UniversityListItem;
