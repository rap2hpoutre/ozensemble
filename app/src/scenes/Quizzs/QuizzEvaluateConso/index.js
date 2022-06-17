import React from 'react';
import Quizz from '../../../components/Quizz';
import { betterEvaluateQuizzAnswersState, betterEvaluateQuizzResultState } from '../../../recoil/quizzs';
import questionsEvaluateConso from './questions';
import ResultsEvaluateConsoNavigator from './ResultsEvaluateConso';
import { mapEvaluateConsoAnswersToResult } from './utils';

const QuizzEvaluateConso = (props) => (
  <Quizz
    {...props}
    questions={questionsEvaluateConso}
    recoilAnswersState={betterEvaluateQuizzAnswersState}
    recoilResultState={betterEvaluateQuizzResultState}
    mapAnswersToResult={mapEvaluateConsoAnswersToResult}
    Results={ResultsEvaluateConsoNavigator}
  />
);

export default QuizzEvaluateConso;
