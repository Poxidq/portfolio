import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { WorksCategorieRow, PageHeader } from "../components";
import { worksCategoriesSorting } from "../utils"; 

function WorksCategories() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(`http://localhost:3000/${location.pathname}`)
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);

  const categories_items = worksCategoriesSorting(categories);

  return (
    <div className="page page_works">
      <PageHeader title="works" color="violet" />
      <div className="page_content">
        <div className="works_categories">
          {categories_items &&
            categories_items.map((categories_item, _id) => {
              if ((_id + 1) % 2 != 0) {
                return (
                  <WorksCategorieRow
                    key={_id}
                    categories={categories_item}
                    inverted={false}
                  />
                );
              } else {
                return (
                  <WorksCategorieRow
                    key={_id}
                    categories={categories_item}
                    inverted={true}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default WorksCategories;

// const testCategories1 = [
//   {
//     name: "Python",
//     color: "purple",
//     path: "/python",
//   },
//   {
//     name: "JS",
//     color: "pink",
//     path: "/js",
//   },
//   {
//     name: "Django",
//     color: "yellow",
//     path: "/django",
//   },
// ];
// const testCategories2 = [
//   {
//     name: "HTML / CSS",
//     color: "purple",
//     path: "/htmlcss",
//   },
//   {
//     name: "C++",
//     color: "pink",
//     path: "/c",
//   },
//   {
//     name: "Design",
//     color: "yellow",
//     path: "/design",
//   },
// ];
