import React from "react";
import { Link } from "react-router-dom";

function SectionCard({ title, color, link }) {
  return (
    <Link to={`/${link}`} className="section_card_link">
      <div className={`section_card section_card_${color}`}>
        <div className="section_title">{title}</div>
      </div>
    </Link>
  );
}

export default SectionCard;
