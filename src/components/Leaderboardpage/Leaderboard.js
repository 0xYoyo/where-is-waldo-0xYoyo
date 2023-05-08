import React, { useEffect, useRef, useState } from "react";
import { useLevel } from "../LevelContext";
import { collection, getDocs, query } from "firebase/firestore";
import db from "../../firebase-config";
import { v4 as uuidv4 } from "uuid";

export default function Leaderboard() {
  const { currentLevel } = useLevel();
  const [scoreList, setScoreList] = useState([]);
  const initialized = useRef(false);

  const timeToSeconds = (time) =>
    time.split(":").reduce((acc, val) => acc * 60 + +val, 0);

  async function getScoreData() {
    const levelUsersRef = collection(db, `level${currentLevel.id}Users`);
    const q = query(levelUsersRef);
    const scoresQuery = await getDocs(q);
    const docList = [];
    scoresQuery.forEach((doc) => {
      docList.push(doc.data().user);
    });
    const sortedList = docList.sort(
      (a, b) => timeToSeconds(a.timer) - timeToSeconds(b.timer)
    );
    const top10 = sortedList.slice(0, 10);
    setScoreList(top10);
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getScoreData();
    }
  }, []);

  const scores = scoreList.map((score) => (
    <li key={uuidv4()}>
      <p>
        {score.name} - {score.timer}
      </p>
    </li>
  ));

  return (
    <div>
      <h1>Top 10</h1>
      <ul>{scores}</ul>
    </div>
  );
}
