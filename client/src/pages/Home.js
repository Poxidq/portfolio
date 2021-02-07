import React from "react";
import { SectionCard } from "../components/Sections";

function Home() {
  return (
    <div className="sections_body">
      <SectionCard title="About me" color="purple" link="about" />
      <SectionCard title="My Works" color="violet" link="works" />
      <SectionCard title="Links" color="pink" link="links" />
      <SectionCard title="Skills" color="yellow" link="skills" />
    </div>
  );
}

export default Home;
