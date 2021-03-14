import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { PageHeader, CategoryWork } from "../components";

function CategoryWorks() {
  const location = useLocation();
  const [works, setWorks] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000${location.pathname}`)
      .then((res) => res.json())
      .then((works) => setWorks(works));
  }, []);

  return (
    <div className="page page_works">
      <PageHeader
        title={location.pathname.split("/").last()}
        color="violet"
        withHome={true}
      />
      <div className="works_sort">
        <span>Sort by:</span>
        <div className="buttons">
          <button className="active active-1">Date</button>
          <button className="">Date</button>
        </div>
      </div>
      <div className="works_list">
        {works &&
          works.map((work, _id) => {
            return (
              <CategoryWork
                key={_id}
                title={work.title.firstLetterCaps()}
                body={work.description}
                technologies={work.technologies}
              />
            );
          })}
      </div>
    </div>
  );
}

export default CategoryWorks;
