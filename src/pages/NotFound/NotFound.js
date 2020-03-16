import React from "react";
import { Link } from "react-router-dom";
import { container, text } from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Link to="/pokemon">
      <div className={container}>
        <img src="https://i.giphy.com/media/UEokUbbsSbUCA/source.gif" />
        <span className={text}>Are you lost?</span>
      </div>
    </Link>
  );
};

export default NotFound;
