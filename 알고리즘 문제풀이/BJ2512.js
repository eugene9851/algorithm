//20min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n')

const n = Number(input[0])
const requests = input[1].split(' ').map(Number).sort((a, b) => a - b)
const total = Number(input[2])
const visited = new Array(n+1).fill(false)

function solution(n, requests, total) {
  let i=Math.floor(total/n)
  while(i<=total) {
    if (calculateSum(requests, n, i) === total) return i

    if (calculateSum(requests, n, i) > total) {
      if (visited[i-1]) return i-1
      visited[i] = true
      i--
    } else {
      if (visited[i+1]) return i
      visited[i] = true
      i++
    }
  }

  return Math.max(...requests)
}

function calculateSum(requests, n, k) {
  let sum = 0;
  for(let i=0; i<n; i++) {
    if (requests[i] < k) sum += requests[i]
    else sum += k
  }
  return sum
}

console.log(solution(n, requests, total))
