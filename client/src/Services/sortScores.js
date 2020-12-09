export default function sortScores(scores) {
  const sortedHighScores = scores.sort(
    (scoreA, scoreB) =>
      scoreB.score - scoreA.score
  );

  return sortedHighScores;
}
