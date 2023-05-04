import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Game from "./components/Gamepage/Game";
import Leaderboard from "./components/Leaderboardpage/Leaderboard";
import { LevelProvider } from "./components/LevelContext";

function App() {
  // const [logoY, setLogoY] = useState(0);
  // const [logoX, setLogoX] = useState(0);
  // console.log(logoRef);

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
