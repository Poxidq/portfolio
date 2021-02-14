import React from "react";

function PageLink({imgSrc, link}) {
  return (
    <a className="link" href={link} target="_blank">
      <img src={imgSrc} />
    </a>
  );
}

export default PageLink;
