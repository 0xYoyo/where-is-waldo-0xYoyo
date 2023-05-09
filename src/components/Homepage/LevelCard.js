import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useLevel } from "../utils/LevelContext";

export default function LevelCard({ level }) {
  const characters = level.toFind.map((char) => (
    <li key={uuidv4()}>
      <img src={char.logo} alt="character" />
    </li>
  ));
  const { setLevel } = useLevel();

  return (
    <div
      onClick={(e) => {
        setLevel(level);
      }}
      className="LevelCard"
    >
      <img src={level.pic} alt={level.difficulty} />
      <div>
        <h2>
          <span>Level:</span> {level.difficulty}
        </h2>
        <ul>{characters}</ul>
      </div>
    </div>
  );
}
