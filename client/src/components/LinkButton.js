import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ linkTo }) {
  const link = linkTo ? `/${linkTo}` : "/";
  return <Link to={link} className="linkButton">Go back</Link>;
}

export default LinkButton;
