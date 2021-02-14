import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components";

function CategoryWorks() {
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
        <Link to="/works/python/medirect">
          <div className="work_card">
            <div className="work_card_main">
              <span className="title">Medirect</span>
              <p className="technologies">
                CSS HTML JS Bootstrap Django (Python)
              </p>
            </div>
            <div className="work_card_additional">
              <p className="text">
                I created the Medirect project from scratch, from design to
                development. Goal: to create a system that can process people's
                blood tests. Goal: to create a system that can process people's
                blood tests.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="work_card">
            <div className="work_card_main">
              <span className="title">Medirect</span>
              <p className="technologies">
                CSS HTML JS Bootstrap Django (Python)
              </p>
            </div>
            <div className="work_card_additional">
              <p className="text">
                I created the Medirect project from scratch, from design to
                development. Goal: to create a system that can process people's
                blood tests. Goal: to create a system that can process people's
                blood tests.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="work_card">
            <div className="work_card_main">
              <span className="title">React Pizza</span>
              <p className="technologies">CSS HTML JS Bootstrap React</p>
            </div>
            <div className="work_card_additional">
              <p className="text">
                I created the Medirect project from scratch, from design to
                development. Goal: to create a system that can process people's
                blood tests. Goal: to create a system that can process people's
                blood tests.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CategoryWorks;
