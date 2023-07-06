"use client";

import { useState } from "react";
import QuizCard from "./components/QuizCard";
import APIS from "./APIS";
import { Difficulty } from "./APIS";

const TOTAL_QUESTIONS = 10;
function page() {
  const [userAnswers, setUserAbswer] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  console.log(APIS(TOTAL_QUESTIONS, Difficulty.EASY));

  const stratTrivia = async () => {};

  const checkAnswer = (e: React.MouseEventHandler<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>QUIZZ</h1>
      <button className="button" onClick={stratTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Quistioz ...</p>
      {/* <QuizCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default page;
