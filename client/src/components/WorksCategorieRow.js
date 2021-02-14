import React from "react";
import { Link } from "react-router-dom";

function WorksCategorieRow({ categories, inverted }) {
  console.log("cat: ", categories, "inv: ", inverted);

  return (
    <div
      className={
        inverted
          ? "works_categories_row_inverted works_categories_row"
          : "works_categories_row"
      }
    >
      {categories ? (
        categories.map((c, id) => {
          if (id === 1) {
            // id = 1 т.к. массив начинается с 0
            return (
              <Link key={id} to={`/works${c.path}`}>
                <div className="works_category works_category-inverted">
                  <span>{c.name}</span>
                  <div className={`triangle triangle-${c.color}`}></div>
                </div>
              </Link>
            );
          } else {
            return (
              <Link key={id} to={`/works${c.path}`}>
                <div className="works_category">
                  <span>{c.name}</span>
                  <div className={`triangle triangle-${c.color}`}></div>
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
