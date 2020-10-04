import { computeScore } from '../src/Quizz/utils';

describe('computeScore', () => {
  const example1 = { glasses: null, gender: 'man', frequency: 'never', binge: 'never' };
  test(JSON.stringify(example1), () => {
    expect(computeScore(example1)).toEqual({ gender: 'man', score: 0 });
  });
});
