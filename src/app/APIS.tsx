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
  console.log(Object.values(data.results));
  console.log(data.results);

  //   return data.results.map((question: Question) => ({
  //     ...question,
  //     answers: ShuffeArray([
  //       ...question.incorrect_answer,
  //       question.correct_answers,
  //     ]),
  //   }));

  return data.results.map((q: Question) => {
    console.log(q);
  });
};

export default APIS;
