import React from "react";

import { PageHeader, PageLink } from "../components";

import gihubIcon from "../assets/githubIcon.png";
import vkIcon from "../assets/vkIcon.png";
import steamIcon from "../assets/steamIcon.png";

function LinksPage() {
  return (
    <div className="page page_links">
      <PageHeader title="Links" color="violet" />
      <div className="page_content">
        <div className="links_list">
          <PageLink link="https://github.com/Poxidq" imgSrc={gihubIcon} />
          <PageLink link="https://vk.com/vvvvvvvvqq" imgSrc={vkIcon} />
          <PageLink link="https://github.com/Poxidq" imgSrc={steamIcon} />
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
