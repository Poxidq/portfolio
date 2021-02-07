import React from "react";

function SectionCard({ title, color }) {
  return (
    <div className={`section_card section_card_${color}`}>
      <div className="section_title">
        {title}
      </div>
    </div>
  );
}

export default SectionCard;
