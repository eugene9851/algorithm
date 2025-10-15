//23min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n')

const [n, newScore, p] = input[0].split(' ').map(Number)
const scores = n === 0 ? [] : input[1].split(' ').map(Number)

function solution(n, newScore, p, scores) {
  const scoresLength = scores.length

  if (n === 0) return 1

  if (n === p && newScore <= scores[scoresLength - 1]) return -1

  for(let i=0; i<scoresLength; i++) {
    if (newScore >= scores[i]) return i+1
  }

  return scoresLength + 1
}

console.log(solution(n, newScore, p, scores))