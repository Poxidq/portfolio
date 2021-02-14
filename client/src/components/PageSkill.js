import React from "react";

function PageSkill({imgSrc, link}) {
  return (
    <a href={link} target="_blank">
      <img className="skills_item" src={imgSrc} />
    </a>
  );
}

export default PageSkill;
