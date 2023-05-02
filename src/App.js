import "./App.css";
import { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Game from "./components/Gamepage/Game";
import Leaderboard from "./components/Leaderboardpage/Leaderboard";
import { LevelProvider } from "./components/LevelContext";

function App() {
  const imgRef = useRef(null);
  // const [logoY, setLogoY] = useState(0);
  // const [logoX, setLogoX] = useState(0);
  // console.log(logoRef);
  /* <img ref={imgRef} src={level1} className="App-logo" alt="level1" /> */

  return (
    <div className="App">
      <Router>
        <LevelProvider>
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Game />} path="/game"></Route>
            <Route element={<Leaderboard />} path="/leaderboard"></Route>
          </Routes>
        </LevelProvider>
      </Router>
    </div>
  );
}

export default App;
