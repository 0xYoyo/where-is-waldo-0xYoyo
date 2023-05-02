import React, { useEffect } from "react";
import { useLevel } from "../LevelContext";
import GameNav from "./GameNav";

export default function Game() {
  const { currentLevel } = useLevel();
  useEffect(() => {
    console.log(currentLevel);
  }, [currentLevel]);

  return (
    currentLevel && (
      <div className="Game">
        <GameNav />
        <img className="board" src={currentLevel.pic} alt="Level1" />
      </div>
    )
  );
}
