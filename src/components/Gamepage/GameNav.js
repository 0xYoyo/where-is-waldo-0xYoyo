import React from "react";
import { useLevel } from "../LevelContext";
import { v4 as uuidv4 } from "uuid";
import waldoLogo from "../../images/waldoLogo.svg";
import { Link } from "react-router-dom";

export default function GameNav() {
  const { currentLevel } = useLevel();
  const chars = currentLevel.toFind.map((char) => (
    <li key={uuidv4()}>
      <img src={char} alt="character" />
    </li>
  ));

  return (
    <div className="GameNav">
      <ul>{chars}</ul>
      <div>
        <img className="GameLogos" src={waldoLogo} alt="waldoLogo" />
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
