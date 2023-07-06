"use client";

import { useState } from "react";
import QuizCard from "./components/QuizCard";
import APIS from "./APIS";
import { QuestionState, Difficulty } from "./APIS";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function page() {
  const [userAnswers, setUserAbswer] = useState<AnswerObject[]>([]);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  const stratTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await APIS(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAbswer([]);
    setNumber(0);
    setLoading(false);
  };

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
