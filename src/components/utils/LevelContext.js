import React, { useContext, useState } from "react";

const LevelContext = React.createContext();

export function useLevel() {
  return useContext(LevelContext);
}

export function LevelProvider({ children }) {
  const [currentLevel, setCurrentLevel] = useState();

  function setLevel(level) {
    return setCurrentLevel(level);
  }

  const value = {
    currentLevel,
    setLevel,
  };

  return (
    <LevelContext.Provider value={value}>{children}</LevelContext.Provider>
  );
}
