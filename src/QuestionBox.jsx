import { useState } from "react";

export default function QuestionBox({ level, onAnswer }) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-[url('/blood.jpg')] bg-gray-800 bg-cover bg-center 
      w-full sm:w-3/4 md:w-2/3 lg:w-1/3 p-6 rounded-lg shadow-lg 
      min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] mx-auto">
      
      <h2 className="text-3xl sm:text-4xl font-semibold text-center pb-3 text-yellow-300">
        Mission {level.id}
      </h2>

      <p className="mb-4 text-center font-bold text-[#581845] text-xl sm:text-2xl">
        {level.question}
      </p>

      <input
        type="text"
        className="w-full max-w-md p-3 text-black rounded bg-lime-100 
        border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button
        className="mt-5 w-full sm:w-auto px-6 py-3 rounded text-white 
        bg-[#4A0404] hover:bg-red-700 transition-all duration-300 
        text-lg font-bold uppercase tracking-wide"
        onClick={() => onAnswer(answer)}
      >
        Fire 🔥
      </button>
    </div>
  );
}
