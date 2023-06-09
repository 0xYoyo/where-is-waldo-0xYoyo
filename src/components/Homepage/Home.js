import React, { useEffect } from "react";
import Nav from "../utils/Nav";
import { levelData } from "../utils/levels";
import { v4 as uuidv4 } from "uuid";
import LevelCard from "./LevelCard";
import { Link } from "react-router-dom";
import { useLevel } from "../utils/LevelContext";

export default function Home() {
  const { setLevel } = useLevel();
  useEffect(() => {
    setLevel();
  }, []);
  const levelDisplay = levelData.map((level) => (
    <li key={uuidv4()}>
      <Link to="/game">
        <LevelCard level={level} />
      </Link>
    </li>
  ));

  return (
    <div>
      <Nav />
      <div className="levelDisplay">
        <ul>{levelDisplay}</ul>
      </div>
    </div>
  );
}
