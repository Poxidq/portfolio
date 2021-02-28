import React from "react";
import { Link } from "react-router-dom";

function CategoryWork({ title, body, technologies }) {
  return (
    <Link to={`/works/${technologies[0].toLowerCase()}/${title.toLowerCase()}`}>
      <div className="work_card">
        <div className="work_card_main">
          <span className="title">{title}</span>
          <p className="technologies">{technologies.join(" ~ ")}</p>
        </div>
        <div className="work_card_additional">
          <p className="text">{body}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryWork;
