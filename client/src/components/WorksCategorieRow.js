import React from "react";
import { Link } from "react-router-dom";

function WorksCategorieRow({ categories, inverted }) {
  return (
    <div
      className={
        inverted
          ? "works_categories_row_inverted works_categories_row"
          : "works_categories_row"
      }
    >
      {Object.entries(categories)[0][1] ? (
        Object.entries(categories)[0][1].map((c, id) => {
          if (id === 1) {
            // id = 1 т.к. массив начинается с 0
            return (
              <Link key={id} to={`/works/${c}`}>
                <div className="works_category works_category-inverted">
                  <span>{c}</span>
                  <div className="triangle"></div>
                </div>
              </Link>
            );
          } else {
            return (
              <Link key={id} to={`/works/${c}`}>
                <div className="works_category">
                  <span>{c}</span>
                  <div className="triangle"></div>
                </div>
              </Link>
            );
          }
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WorksCategorieRow;
