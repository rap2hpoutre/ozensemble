import React from 'react';
import Quizz from '../../../components/Quizz';
import questionsLifeQuality from './questions';
import ResultsLifeQuality from './ResultsLifeQuality';
import { mapLifeQualityAnswersToResult } from './utils';

const QuizzLifeQuality = (props) => (
  <Quizz
    {...props}
    questions={questionsLifeQuality}
    memoryKeyResult={'@QuizzLifeQuality_result'}
    memoryKeyAnswers={'@QuizzLifeQuality_answers'}
    mapAnswersToResult={mapLifeQualityAnswersToResult}
    Results={ResultsLifeQuality}
  />
);

export default QuizzLifeQuality;