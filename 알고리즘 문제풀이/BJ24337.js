let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, a, b] = input[0].split(' ').map(Number)

function solution() {
  const answer = []
  for(let i=1; i<a; i++) answer.push(i)
  answer.push(Math.max(a, b))
  for(let j=b-1; j>=1; j--) answer.push(j)
  
  if (answer.length > n) return '-1'

  let result = []

  result.push(answer[0])

  for(let i=0; i<n-answer.length; i++) {
    result.push(1)
  }

  for(let i=1; i<answer.length; i++) {
    result.push(answer[i])
  }

  return result.join(' ')
}

console.log(solution())
