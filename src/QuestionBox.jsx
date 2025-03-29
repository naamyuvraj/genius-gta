import { useState } from "react";

export default function QuestionBox({ level, onAnswer }) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-[url('/blood.jpg')] w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg h-[500px] bg-cover bg-center">
      <h2 className="text-4xl font-semibold mb-2 text-center pb-5 pt-10">Mission {level.id}</h2>
      <p className="mb-2 text-center font-bold pb-10 text-[#722F37] pt-4 text-2xl">{level.question}</p>
      <input
        type="text"
        className="w-full p-2 text-black rounded bg-lime-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
        placeholder="Your Answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button
        className="mt-3  px-4 py-2 rounded text-white bg-[#4A0404]"
        onClick={() => onAnswer(answer)}
      >
        Fire
      </button>
    </div>
  );
}
