import React, { useEffect, useRef, useState } from "react";
import { useLevel } from "../LevelContext";
import GameNav from "./GameNav";
import CharPick from "./CharPick";
import { proportions } from "../proportions";

export default function Game() {
  const { currentLevel } = useLevel();
  const [picking, setPicking] = useState(false);
  const [clickLocation, setClickLocation] = useState({ x: 0, y: 0 });
  const [charsList, setCharsList] = useState(
    currentLevel.toFind.map((char) => {
      return { name: char.name, found: false };
    })
  );
  const imgRef = useRef(null);

  const handlePicks = (e) => {
    if (picking) {
      setPicking(false);
    } else {
      setPicking(true);
      setClickLocation(() => {
        return { x: e.pageX, y: e.pageY };
      });
    }
  };

  const handleCharPick = (option) => {
    validatePick(option.name);
    setPicking(false);
  };

  const inbounds = (obj) => {
    return (
      clickLocation.x - imgRef.current.offsetLeft >
        obj.topLeft.x * imgRef.current.width &&
      clickLocation.x - imgRef.current.offsetLeft <
        obj.topRight.x * imgRef.current.width &&
      clickLocation.y - imgRef.current.offsetTop >
        obj.topLeft.y * imgRef.current.height &&
      clickLocation.y - imgRef.current.offsetTop <
        obj.bottomLeft.y * imgRef.current.height
    );
  };

  // Need to optimize this to scale
  const validatePick = (optionName) => {
    if (currentLevel.id === 1) {
      const pickedObj = proportions.level1.find(
        (obj) => obj.name === optionName
      );
      console.log(pickedObj);
      if (inbounds(pickedObj)) {
        const newList = charsList.map((char) => {
          if (char.name === pickedObj.name) {
            return { ...char, found: true };
          } else {
            return char;
          }
        });
        setCharsList(newList);
      }
    }
    if (currentLevel.id === 2) {
      const pickedObj = proportions.level2.find(
        (obj) => obj.name === optionName
      );
      console.log(pickedObj);
      if (inbounds(pickedObj)) {
        const newList = charsList.map((char) => {
          if (char.name === pickedObj.name) {
            return { ...char, found: true };
          } else {
            return char;
          }
        });
        setCharsList(newList);
      }
    }
    if (currentLevel.id === 3) {
      const pickedObj = proportions.level3.find(
        (obj) => obj.name === optionName
      );
      console.log(pickedObj);
      if (inbounds(pickedObj)) {
        const newList = charsList.map((char) => {
          if (char.name === pickedObj.name) {
            return { ...char, found: true };
          } else {
            return char;
          }
        });
        setCharsList(newList);
      }
    }
  };

  // useEffect(() => {
  //   console.log(clickLocation);
  //   console.log(imgRef);
  //   console.log(charsList);
  // });

  // const getProportions = () => {
  //   return {
  //     edge: {
  //       edgeX:
  //         (clickLocation.x - imgRef.current.offsetLeft) / imgRef.current.width,
  //       edgeY:
  //         (clickLocation.y - imgRef.current.offsetTop) / imgRef.current.height,
  //     },
  //   };
  // };

  return (
    currentLevel && (
      <div className="Game">
        <GameNav list={charsList} />
        <div className="container">
          <img
            ref={imgRef}
            onClick={(e) => {
              handlePicks(e);
            }}
            className="board"
            src={currentLevel.pic}
            alt="Level1"
          />
        </div>
        {picking && (
          <CharPick location={clickLocation} handleCharPick={handleCharPick} />
        )}
      </div>
    )
  );
}
