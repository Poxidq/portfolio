import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageHeader } from "../components";

function WorkDetail() {
  const location = useLocation();

  const [isLoading, setIsLoding] = useState(true);
  const [work, setWork] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000${location.pathname}`)
      .then((res) => res.json())
      .then((work) => {
        setWork(work[0]);
        setIsLoding(false);
      });
  }, []);
  console.log(work);
  return work && !isLoading ? (
    <div className="page page_works">
      <PageHeader
        title="Medirect"
        color="violet"
        withHome={true}
        to={`/works/${location.pathname.split("/")[2]}`}
      />
      <div className="page_content">
        <div className="work_detail_technologies work_detail">
          <span className="work_title">Technologies</span>
          <p className="work_desc work_text">
            {work.technologies.map((t) => t.firstLetterCaps()).join(" ")}
          </p>
        </div>
        <div className="work_detail_desc work_detail">
          <span className="work_title">Description</span>
          <p className="work_desc work_text">{work.description}</p>
        </div>
        <div className="work_detail_screens work_detail">
          <span className="work_title">Screenshots</span>
          <div className="screenshots">
            {work.screens &&
              work.screens.map((screen, _id) => <img key={_id} src={screen} />)}
          </div>
        </div>
        <div className="work_detail_github work_detail">
          <a href={work.link} target="blank" className="work_title">
            View the source code on github
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="page page_works">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default WorkDetail;
