import React from "react";
import { PageHeader } from "../components";

import screeenOne from "../assets/screenshots/1.png";
import screeenTwo from "../assets/screenshots/2.png";
import screeenThree from "../assets/screenshots/3.png";

function WorkDetail() {
  return (
    <div className="page page_works">
      <PageHeader
        title="Medirect"
        color="violet"
        withHome={true}
        to="/works/python"
      />
      <div className="page_content">
        <div className="work_detail_technologies work_detail">
          <span className="work_title">Technologies</span>
          <p className="work_desc work_text">
            CSS, HTML, JS, Bootstrap, Django (Python){" "}
          </p>
        </div>
        <div className="work_detail_desc work_detail">
          <span className="work_title">Description</span>
          <p className="work_desc work_text">
            I created the Medirect project from scratch, from design to
            development. Goal: to create a system that can process people's
            blood tests and give them recommendations based on their tests.(The
            results of analyses of red blood cells, hemoglobin, hematocrit,
            white blood cells, and platelets are taken as data.)
            <br />
            <br />
            We have implemented user authorization (password recovery, account
            creation), as well as the ability to create posts that are placed on
            the main page.
          </p>
        </div>
        <div className="work_detail_screens work_detail">
          <span className="work_title">Screenshots</span>
          <div className="screenshots">
            <img src={screeenOne} />
            <img src={screeenTwo} />
            <img src={screeenThree} />
            <img src={screeenThree} />
            <img src={screeenThree} />
            <img src={screeenThree} />
          </div>
        </div>
        <div className="work_detail_github work_detail">
          <a href="/works/python" className="work_title">
            View the source code on github
          </a>
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;
