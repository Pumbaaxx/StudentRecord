import React from "react";
import { useQuizContext } from "../contexts/QuizContext";

function Options({ question }) {
  const { answer, dispatch } = useQuizContext();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered &&
            (index === question.correctOption ? "correct" : "wrong")
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
