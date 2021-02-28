import React, { useEffect, useState } from "react";

import { PageHeader, CategoryWork } from "../components";

function CategoryWorks() {
  const testText =
    "I created the Medirect project from scratch, from design to development. Goal: to create a system that can process people's blood tests. Goal: to create a system that can process people's blood tests.";
  const testTechnologies = ["Python", "HTML", "CSS", "Django", "JS"];
  const [works, setWorks] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/works/python/")
      .then((res) => res.json())
      .then((works) => setWorks(works));
  }, []);

  return (
    <div className="page page_works">
      <PageHeader title="python" color="violet" withHome={true} />
      <div className="works_sort">
        <span>Sort by:</span>
        <div className="buttons">
          <button className="active active-1">Date</button>
          <button className="">Date</button>
        </div>
      </div>
      <div className="works_list">
        <CategoryWork
          title="Medirect"
          body={testText}
          technologies={testTechnologies}
        />
        <CategoryWork
          title="Medirect"
          body={testText}
          technologies={testTechnologies}
        />
        <CategoryWork
          title="Medirect"
          body={testText}
          technologies={testTechnologies}
        />
      </div>
    </div>
  );
}

export default CategoryWorks;
