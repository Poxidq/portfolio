import React from "react";
import { useLocation } from "react-router-dom";

function NotFoundPage() {
  let location = useLocation();
  return (
    <div className="not_found_page">
      <span>
        No match for <code>{location.pathname}</code>
      </span>
      {/* <img src="https://media.giphy.com/media/11O5c9EfmZTyyA/giphy.gif" /> */}
      <img src="https://media.giphy.com/media/8SEnoMhrEeBDa/giphy.gif" />
    </div>
  );
}

export default NotFoundPage;
