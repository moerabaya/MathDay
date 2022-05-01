import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

import './App.scss';
import Menu from "./components/Menu";
import GamePlay from './components/GamePlay';
import LeaderBoard from "./components/LeaderBoard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/play" element={<GamePlay />} />
          <Route path="/leader-board" element={<LeaderBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
