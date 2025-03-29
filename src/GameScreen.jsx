import { useEffect,useState } from "react";
import { levels } from "./GameState";
import QuestionBox from "./QuestionBox";
import MissionCompletePopup from "./MissionCompletePopup";

export default function GameScreen() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [coins, setCoins] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const audio = new Audio("/assets/gta-san-andreas-6042.mp3");
    audio.loop = true; 
    audio.volume = 0.5; 
    audio.play().catch((err) => console.error("Audio play failed:", err));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);


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
    <div className="bg-[url(/assets/grand-theft-auto-v-pc-anisotropic-filtering-001-4x.jpg)] opacity-90 flex flex-col items-center justify-center h-screen bg-gray-900 text-white ">
      <div className="mb-10">
      <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          GENIUS <span className="text-red-600 ">GTA</span>
        </h1>

      </div>
      <p className="mb-4 bg-yellow-500 p-4 text-white font-bold text-center rounded-xl">Coins: {coins}</p>

      <div className="flex justify-between w-3/4">
        <div className="w-1/3">
          <img src="/assets/lester.png" alt="Lester" className="w-full" />
          <p className="text-center mt-2"></p>
        </div>

        <QuestionBox level={levels[currentLevel]} onAnswer={handleAnswer} />

        <div className="w-1/3">
          <img src="/assets/miachel.png" alt="Michael" className="w-full" />
          <p className="text-center mt-2"></p>
        </div>
      </div>

      {showPopup && <MissionCompletePopup />}
    </div>
  );
}
