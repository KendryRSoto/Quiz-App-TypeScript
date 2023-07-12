import { AnswerObject } from "../page";
import { useId } from "react";

type props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuizCard: React.FC<props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div className="box mt-5  p-5">
      <p className="number h5 mt-3">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: question }}
        className="h3 border border-primary p-4 rounded text-primary"
      />
      <div className="grid gap-0 row-gap-3 quizz">
        {answers.map((answer) => (
          <div key={answer}>
            <button
              id={answer}
              className="btn btn-secondary p-2 g-col-6 mt-3 "
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
