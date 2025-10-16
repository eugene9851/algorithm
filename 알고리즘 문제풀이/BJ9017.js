//70min
let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n')

const testCases = Number(input[0])

function solution(n, scores) {
  const playerNum = Array(201).fill(0)
  for(let i=0; i<n; i++) playerNum[scores[i]]++

  const isPassedTeams = new Set()
  for(let i=1; i<=200; i++) {
    if (playerNum[i] === 6) isPassedTeams.add(i)
  }
  const filteredScores = []
  for(let i=0; i<n; i++) {
    if (isPassedTeams.has(scores[i])) filteredScores.push(scores[i])
  }

  const teamScores = Array.from({ length: 201 }, () => [])
  for(let i=0; i<filteredScores.length; i++) {
    const team = filteredScores[i]
    teamScores[team].push(i+1)
  }

  let minSum = Infinity
  let candidateTeams = []

  for(let team=1; team<=200; team++) {
    if(!isPassedTeams.has(team)) continue
    const ranks = teamScores[team]
    const total = ranks[0]+ranks[1]+ranks[2]+ranks[3]
    const tieRank = ranks[4]
    if (total < minSum) {
      minSum = total
      candidateTeams = [[team, tieRank]]
    } else if (total === minSum) candidateTeams.push([team, tieRank])
  }

  candidateTeams.sort((a, b) => a[1] - b[1])
  return candidateTeams[0][0]
}

for(let i=0; i<testCases; i++) {
  const n = Number(input[2*i+1])
  const scores = input[2*i+2].split(' ').map(Number)

  console.log(solution(n, scores))
}
