import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./welcome";
import GameScreen from "./GameScreen"; // Ensure this file exists

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </Router>
  );
}
