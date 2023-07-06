import ShuffeArray from "./utils/Shuff";

export type Question = {
  category: string;
  correct_answers: string;
  difficulty: string;
  incorrect_answer: string[];
  question: string;
  type: string;
};
export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MIDDLE = "middle",
  HARD = "hard",
}

const APIS = async (amount: number, difficulty: Difficulty) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endPoint)).json();

  return data.result.map((question: Question) => ({
    ...question,
    answer: ShuffeArray([
      ...question.incorrect_answer,
      question.correct_answers,
    ]),
  }));
};

export default APIS;
