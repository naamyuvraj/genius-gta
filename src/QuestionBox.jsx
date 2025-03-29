import { useState } from "react";

export default function QuestionBox({ level, onAnswer }) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Mission {level.id}</h2>
      <p className="mb-3">{level.question}</p>
      <input
        type="text"
        className="w-full p-2 text-black rounded"
        placeholder="Your Answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button
        className="mt-3 bg-blue-600 px-4 py-2 rounded text-white"
        onClick={() => onAnswer(answer)}
      >
        Submit
      </button>
    </div>
  );
}
