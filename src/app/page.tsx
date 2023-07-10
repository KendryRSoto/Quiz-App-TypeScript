"use client";

import { useState } from "react";
import QuizCard from "./components/QuizCard";
import APIS from "./APIS";
import { QuestionState, Difficulty } from "./APIS";

export type AnswerObject = {
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

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        questions: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAbswer((prev: any) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <div className="container text-center">
      <div className="justify-content-center">
        <h1>QUIZZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="button" onClick={stratTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score} </p> : null}
        {loading && <p>Loading Quistioz ...</p>}
        {!loading && !gameOver && (
          <QuizCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default page;
