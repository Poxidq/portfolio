import React from "react";

import { WorksCategorieRow, PageHeader } from "../components";

function WorksCategories() {
  const testCategories1 = [
    {
      name: "Python",
      color: "purple",
      path: "/python",
    },
    {
      name: "JS",
      color: "pink",
      path: "/js",
    },
    {
      name: "Django",
      color: "yellow",
      path: "/django",
    },
  ];
  const testCategories2 = [
    {
      name: "HTML / CSS",
      color: "purple",
      path: "/htmlcss",
    },
    {
      name: "C++",
      color: "pink",
      path: "/c",
    },
    {
      name: "Design",
      color: "yellow",
      path: "/design",
    },
  ];
  return (
    <div className="page page_works">
      <PageHeader title="works" color="violet" />
      <div className="page_content">
        <div className="works_categories">
          <WorksCategorieRow categories={testCategories1} inverted={false} />
          <WorksCategorieRow categories={testCategories2} inverted={true} />
        </div>
      </div>
    </div>
  );
}

export default WorksCategories;
