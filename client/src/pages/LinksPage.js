import React from "react";

import PageHeader from "../components/PageHeader";

import gihubIcon from "../assets/githubIcon.png";
import vkIcon from "../assets/vkIcon.png";
import steamIcon from "../assets/steamIcon.png";

function LinksPage() {
  return (
    <div className="page page_links">
      <PageHeader title="Links" color="pink" />
      <div className="page_content">
        <div className="links_list">
          <a className="link" href="https://github.com/Poxidq" target="_blank">
            <img src={gihubIcon} />
          </a>
          <a className="link" href="https://vk.com/vvvvvvvvqq" target="_blank">
            <img src={vkIcon} />
          </a>
          <a className="link" href="https://github.com/Poxidq" target="_blank">
            <img src={steamIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
