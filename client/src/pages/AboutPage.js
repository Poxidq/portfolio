import React from "react";

import { PageHeader } from "../components";

function AboutPage() {
  return (
    <div className="page_about page">
      <PageHeader title="About me" color="violet" />
      <div className="page_content">
        <div className="about_main-info">
          <div className="about_main-info_text">
            <span>
              Vadim Yarullin <br />
              16 years old <br />
              Profession: IT <br />
              16 y.o. invoker 
            </span>
          </div>
          <div className="about_avatar">
            <img
              src="https://sun9-57.userapi.com/impf/2Wf5NqzLDc1jY6ID4_bsQum8imUOt9atkTR34w/eVM-rq26sFs.jpg?size=564x564&quality=96&proxy=1&sign=afe7b7cb7e7f79cac22fc02617d14e7d&type=album"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
