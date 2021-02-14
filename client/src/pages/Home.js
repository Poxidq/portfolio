import React from "react";
import { SectionCard } from "../components/Sections";

function Home() {
  return (
    <div className="sections_body">
      <SectionCard title="About me" color="violet" link="about" />
      <SectionCard title="My Works" color="violet" link="works" />
      <SectionCard title="Links" color="violet" link="links" />
      <SectionCard title="Skills" color="violet" link="skills" />
    </div>
  );
}

export default Home;
