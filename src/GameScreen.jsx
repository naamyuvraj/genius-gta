import { useState } from "react";
import { levels } from "./GameState";
import QuestionBox from "./QuestionBox";
import MissionCompletePopup from "./MissionCompletePopup";

export default function GameScreen() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [coins, setCoins] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase() === levels[currentLevel].answer.toLowerCase()) {
      setCoins(coins + levels[currentLevel].reward);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        if (currentLevel < levels.length - 1) {
          setCurrentLevel(currentLevel + 1);
        } else {
          alert("Game Completed!");
        }
      }, 1000);
    } else {
      alert("Wrong Answer! Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Genius GTA</h1>
      <p className="mb-4">Coins: {coins}</p>

      <div className="flex justify-between w-3/4">
        <div className="w-1/3">
          <img src="/lester.png" alt="Lester" className="w-full" />
          <p className="text-center mt-2">Lester</p>
        </div>

        <QuestionBox level={levels[currentLevel]} onAnswer={handleAnswer} />

        <div className="w-1/3">
          <img src="/michael.png" alt="Michael" className="w-full" />
          <p className="text-center mt-2">Michael</p>
        </div>
      </div>

      {showPopup && <MissionCompletePopup />}
    </div>
  );
}
