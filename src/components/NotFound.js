import React from "react";
import notFound from "../images/waldo404.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="NotFound">
      <img src={notFound} alt="404" />
      <button>
        <Link to={"/"}>Return Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
