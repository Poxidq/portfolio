import React from "react";
import { Link, useLocation } from "react-router-dom";

function CategoryWork({ title, body, technologies }) {
  const location = useLocation();
  return (
    <Link
      to={`/works/${location.pathname
        .split("/")
        .last()}/${title.toLowerCase()}`}
    >
      <div className="work_card">
        <div className="work_card_main">
          <span className="title">{title}</span>
          <p className="technologies">{technologies.join(" ✗ ")}</p>
        </div>
        <div className="work_card_additional">
          <p className="text">{body}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryWork;
