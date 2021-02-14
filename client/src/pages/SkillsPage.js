import React from "react";

import { PageHeader, PageSkill } from "../components";

import CIcon from "../assets/skills_icons/c.svg";
import CssIcon from "../assets/skills_icons/css.svg";
import LinuxIcon from "../assets/skills_icons/linux.svg";
import JsIcon from "../assets/skills_icons/js.svg";
import HtmlIcon from "../assets/skills_icons/html.svg";
import PythonIcon from "../assets/skills_icons/python.svg";
import VueJsIcon from "../assets/skills_icons/vuejs.svg";
import DjangoIcon from "../assets/skills_icons/django.svg";
import CyberIcon from "../assets/skills_icons/cybersecurity.svg";
import AngularIcon from "../assets/skills_icons/angularjs.svg";
// Нужно заменить как-нибудь изменить импорт всех этих svg

// Додумать эту часть
// const link = {
//   django: "https://django.com",
// };

function SkillsPage() {
  return (
    <div className="page page_skills">
      <PageHeader title="Skills" color="violet" />
      <div className="page_content">
        <div className="skills_list">
          {/* Заменить на запрос к бд + вывод каждой на экран /\ ссылка должна переадресовывать пользователя на главную страницу языка/технологии */}
          <PageSkill imgSrc={LinuxIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={AngularIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={VueJsIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={DjangoIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={CyberIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={PythonIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={HtmlIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={JsIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={CssIcon} link="https://www.debian.org/" />
          <PageSkill imgSrc={CIcon} link="https://www.debian.org/" />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
