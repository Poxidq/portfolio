import React from "react";
import { Link } from "react-router-dom";

import back_arrow from "../assets/back_arrow.js";
import homeIcon from "../assets/homeIcon.svg";

function PageHeader({ title, color, withHome, to }) {
  const header =
    withHome == true ? (
      <div className="page_header">
        <Link to={to ? to : "/works"} className="page_header_button">
          {back_arrow}
        </Link>
        <span className={`page_header_title page_header_title_${color}`}>
          {title}
        </span>
        <Link to="/" className="page_header_button_home">
          <img src={homeIcon} />
        </Link>
      </div>
    ) : (
      <div className="page_header">
        <Link to="/" className="page_header_button">
          {back_arrow}
        </Link>
        <span className={`page_header_title page_header_title_${color}`}>
          {title}
        </span>
      </div>
    );
  return header;
}

export default PageHeader;
