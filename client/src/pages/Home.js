import React from "react";
import { SectionCard } from "../components/Sections";

function Home() {
  return (
    <div className="sections_body">
      <SectionCard title="About me" color="purple" />
      <SectionCard title="My Works" color="violet" />
      <SectionCard title="Links" color="pink" />
      <SectionCard title="Skills" color="yellow" />
    </div>
  );
}

export default Home;
