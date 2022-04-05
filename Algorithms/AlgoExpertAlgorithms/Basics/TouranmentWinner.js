export function tournamentWinner(competitions, results) {
  const homeTeam = 1;
  let winnerList = {};
  let highScorer = { name: "", value: 0 };
  for (let i = 0; i < competitions.length; i++) {
    let currentMatch = competitions[i];
    if (results[i] === homeTeam) {
      highScorer = updateList(winnerList, currentMatch[0], highScorer);
    } else {
      highScorer = updateList(winnerList, currentMatch[1], highScorer);
    }
  }
  return highScorer.value;
}

function updateList(winnerList, currentMatch, highScorer) {
  if (!winnerList[currentMatch]) winnerList[currentMatch] = 0;

  winnerList[currentMatch] += 3;

  
  return highScorer;
}
console.log(tournamentWinner([["HTML", "C#"],["C#", "Python"],["Python", "HTML"],],[0, 0, 1])
);
