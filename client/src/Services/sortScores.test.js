import sortScores from './sortScores';

describe('sortScores', () => {
  it('Sorts scores from biggest to smalles', () => {
    const objectToSort = [
      { playerName: 'helo', scores: 1 },
      { playerName: 'yo', scores: 2 },
    ];
    const sortedObject = [
      { playerName: 'yo', scores: 2 },
      { playerName: 'helo', scores: 1 },
    ];
    expect(sortScores(objectToSort)).toEqual(
      sortedObject
    );
  });
});
