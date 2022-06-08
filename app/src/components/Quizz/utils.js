import { capture } from '../../services/sentry';
import { storage } from '../../services/storage';

// Utils
export const findQuestion = (questions, questionKey) =>
  questions.find((question) => question.questionKey === questionKey);
const findAnswer = ({ answers }, answerKey) => answers.find((answer) => answer.answerKey === answerKey);
export const getAnswerScore = (questions, answers, questionKey) =>
  findAnswer(findQuestion(questions, questionKey), answers[questionKey])?.score;

export const fetchStoredAnswers = ({ memoryKeyAnswers, memoryKeyResult, questions = [] }) => {
  const computeInitAnswersState = () => {
    const initAnswerState = {};
    for (let question of questions) {
      initAnswerState[question.questionKey] = null;
    }
    return initAnswerState;
  };

  const toReturn = { answers: null, result: null };
  try {
    const storedAnswers = storage.getString(memoryKeyAnswers);
    if (storedAnswers) {
      toReturn.answers = JSON.parse(storedAnswers);
    } else {
      toReturn.answers = computeInitAnswersState();
    }
    if (memoryKeyResult) {
      const storedResultKey = storage.getString(memoryKeyResult);
      if (storedResultKey) {
        toReturn.result = JSON.parse(storedResultKey);
      }
    }
  } catch (e) {
    capture(e, { extra: { message: 'error catching stored answers', memoryKeyAnswers, memoryKeyResult, questions } });
  }
  return toReturn;
};
