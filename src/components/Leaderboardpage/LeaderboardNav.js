import React, { useState } from "react";
import waldoLogo from "../../images/waldoLogo.svg";
import { Link } from "react-router-dom";
import { useLevel } from "../LevelContext";
import { v4 as uuidv4 } from "uuid";

export default function LeaderboardNav() {
  const { currentLevel } = useLevel();
  const [icons, setIcons] = useState(
    currentLevel.toFind.map((char) => char.logo)
  );
  const iconList = icons.map((icon) => {
    return (
      <li key={uuidv4()}>
        <img src={icon} alt="character" />
      </li>
    );
  });

  return (
    <div className="LeaderboardNav">
      <ul>{iconList}</ul>
      <div>
        <img className="logo" src={waldoLogo} alt="waldoLogo" />
        <h1>
          Where's <span>Waldo</span>?
        </h1>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
