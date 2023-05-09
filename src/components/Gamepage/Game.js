import React, { useEffect, useRef, useState } from "react";
import { useLevel } from "../LevelContext";
import GameNav from "./GameNav";
import CharPick from "./CharPick";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase-config";
import check from "../../images/check.png";
import { v4 as uuidv4 } from "uuid";
import Popup from "./Popup";

export default function Game() {
  const { currentLevel } = useLevel();
  const [picking, setPicking] = useState(false);
  const [clickLocation, setClickLocation] = useState({ x: 0, y: 0 });
  const [charsList, setCharsList] = useState(
    currentLevel.toFind.map((char) => {
      return { name: char.name, found: false };
    })
  );
  const [allFound, setAllFound] = useState(false);
  const [time, setTime] = useState(0);
  const imgRef = useRef(null);

  const getData = async (id) => {
    const docRef = doc(db, "levelProps", `level${id}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data().chars;
  };

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
    validateCustomPick(option.name);
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

  const validateCustomPick = async (optionName) => {
    const currentData = await getData(currentLevel.id);
    const pickedObj = currentData.find((obj) => obj.name === optionName);
    if (inbounds(pickedObj)) {
      const newList = charsList.map((char) => {
        if (char.name === pickedObj.name) {
          return {
            ...char,
            found: true,
            locatedAt: { x: clickLocation.x, y: clickLocation.y },
          };
        } else {
          return char;
        }
      });
      setCharsList(newList);
    } else alert(`Uh oh... ${pickedObj.name} isn't there!`);
  };

  const checkForWin = () => {
    const anyLeft = charsList.find((char) => !char.found);
    if (!anyLeft) setAllFound(true);
  };

  const picks = charsList.map((char) => {
    if (char.found) {
      return (
        <li key={uuidv4()}>
          <img
            style={{
              position: "absolute",
              top: char.locatedAt.y,
              left: char.locatedAt.x,
            }}
            src={check}
            alt="check"
          />
        </li>
      );
    }
  });

  useEffect(() => {
    checkForWin();
  }, [charsList]);

  useEffect(() => {
    if (!allFound) {
      const timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [allFound]);

  const formattedTime = new Date(time * 1000).toLocaleTimeString([], {
    minute: "2-digit",
    second: "2-digit",
  });

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
        <ul className="checks">{picks}</ul>
        {/* <button className="test" onClick={() => setAllFound(true)}>
          Test modal
        </button> */}
        {allFound && <Popup time={formattedTime} />}
      </div>
    )
  );
}
