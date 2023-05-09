import React from "react";
import { useLevel } from "../utils/LevelContext";
import { v4 as uuidv4 } from "uuid";
import waldoLogo from "../../images/waldoLogo.svg";
import { Link } from "react-router-dom";
import check from "../../images/check.png";

export default function GameNav({ list }) {
  const { currentLevel } = useLevel();

  const dynamicChars = list.map((char) => {
    if (char.found) {
      return (
        <li key={uuidv4()}>
          <img src={check} alt="check" />
        </li>
      );
    } else {
      const unfoundChar = currentLevel.toFind.find(
        (charToFind) => charToFind.name === char.name
      );
      return (
        <li key={uuidv4()}>
          <img src={unfoundChar.logo} alt="character" />
        </li>
      );
    }
  });

  // const chars = currentLevel.toFind.map((char) => (
  //   <li key={uuidv4()}>
  //     <img src={char.logo} alt="character" />
  //   </li>
  // ));

  return (
    <div className="GameNav">
      <ul>{dynamicChars}</ul>
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
