import sortScores from './sortScores';

describe('sortScores', () => {
  it('Sorts scores from biggest to smalles', () => {
    const objectToSort = [
      { score: 0 },
      { score: 5 },
      { score: 2 },
    ];
    const sortedObject = [
      { score: 5 },
      { score: 2 },
      { score: 0 },
    ];

    const sortedScores = sortScores(objectToSort);
    expect(sortedScores).toEqual(sortedObject);
  });
});
