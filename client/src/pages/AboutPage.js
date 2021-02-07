import React from "react";

import PageHeader from "../components/PageHeader";

import avatarJpg from "../assets/avatar.jpg";

function AboutPage() {
  return (
    <div className="page_about page">
      <PageHeader title="About me" color="purple" />
      <div className="page_content">
        <div className="about_main-info">
          <div className="about_avatar">
            <img src={avatarJpg} alt="avatar" />
          </div>
          <div className="about_main-info_text">
            <span>
              Vadim Yarullin 16 years old <br />
              Profession: IT
            </span>
          </div>
        </div>
        <div className="about_dop-info">
          My hobbies: basketball, computer games, anime, programming. <br />
          My favorite food is marmalades.
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
