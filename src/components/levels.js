import level1 from "../images/level1.jpg";
import level2 from "../images/level2.jpg";
import level3 from "../images/level3.jpg";
import waldo from "../images/waldo.png";
import wizard from "../images/wizard.png";
import oldaw from "../images/oldaw.png";
import wenda from "../images/wenda.png";

export const levelData = [
  {
    id: 1,
    difficulty: "Easy",
    pic: level1,
    toFind: [waldo, oldaw, wizard],
  },
  { id: 2, difficulty: "Moderate", pic: level2, toFind: [waldo, oldaw] },
  {
    id: 3,
    difficulty: "Hard",
    pic: level3,
    toFind: [waldo, oldaw, wizard, wenda],
  },
];
