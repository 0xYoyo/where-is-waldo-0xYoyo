import level1 from "../images/level1.jpg";
import level2 from "../images/level2.jpg";
import level3 from "../images/level3.jpg";
import waldo from "../images/waldo.png";
import wizard from "../images/wizard.png";
import odlaw from "../images/odlaw.png";
import wenda from "../images/wenda.png";

export const levelData = [
  {
    id: 1,
    difficulty: "Easy",
    pic: level1,
    toFind: [
      { logo: waldo, name: "Waldo" },
      { logo: odlaw, name: "Odlaw" },
      { logo: wizard, name: "Wizard" },
    ],
  },
  {
    id: 2,
    difficulty: "Moderate",
    pic: level2,
    toFind: [
      { logo: waldo, name: "Waldo" },
      { logo: odlaw, name: "Odlaw" },
    ],
  },
  {
    id: 3,
    difficulty: "Hard",
    pic: level3,
    toFind: [
      { logo: waldo, name: "Waldo" },
      { logo: odlaw, name: "Odlaw" },
      { logo: wizard, name: "Wizard" },
      { logo: wenda, name: "Wenda" },
    ],
  },
];
