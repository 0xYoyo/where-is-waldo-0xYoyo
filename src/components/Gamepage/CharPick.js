import React from "react";
import { useLevel } from "../utils/LevelContext";
import { v4 as uuidv4 } from "uuid";

export default function CharPick({ location, handleCharPick }) {
  const { currentLevel } = useLevel();
  const options = currentLevel.toFind.map((option) => (
    <li
      onClick={() => {
        handleCharPick(option);
      }}
      key={uuidv4()}
    >
      <img src={option.logo} alt="character" />
      {option.name}
    </li>
  ));

  return (
    <div
      className="charPick"
      style={{ top: location.y, left: location.x, position: "absolute" }}
    >
      <ul>{options}</ul>
    </div>
  );
}
