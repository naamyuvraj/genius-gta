import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate(); 
  return (
    <div className="min-h-screen flex flex-col justify-center item-center bg-[url('/assets/bg2.jpg')] bg-cover bg-center text-white">
      <div className="bg-black opacity-70 p-8 rounded-lg shadow-xl text-center max-w-2xl ml-auto mr-auto">
        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          GENIUS <span className="text-red-600">GTA</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Welcome to the Genius GTA game! Solve missions and challenges to earn coins. 
          Test your intelligence and problem-solving skills in the gangster world.
        </p>

        <p className="mt-4 text-gray-300">
          Here, Lester will guide you through various missions.
          Your goal is to answer the questions correctly and earn coins and Kill your target.
        </p>

        <p className="mt-4 text-lg font-semibold">Good luck, genius!</p>

        <button
          className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold text-xl uppercase tracking-wider 
          border-4 border-black rounded-lg shadow-lg hover:scale-110 hover:bg-red-500 transition-all duration-300"
          onClick={() => navigate("/game")}
        >
          Start Game 🚀
        </button>
      </div>
    </div>
  );
}
