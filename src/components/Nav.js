import React from "react";
import waldoLogo from "../images/waldoLogo.svg";

export default function Nav() {
  return (
    <div className="Nav">
      <img className="logo" src={waldoLogo} alt="waldoLogo" />
      <h1>
        Where's <span>Waldo</span>?
      </h1>
    </div>
  );
}
