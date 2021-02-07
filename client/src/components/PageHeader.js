import React from "react";
import { Link } from "react-router-dom";

import back_arrow from "../assets/back_arrow.js";

function PageHeader({ title, color }) {
  return (
    <div className="page_header">
      <Link to="/" className="page_header_button">
        {back_arrow}
      </Link>
      <span className={`page_header_title page_header_title_${color}`}>
        {title}
      </span>
    </div>
  );
}

export default PageHeader;
