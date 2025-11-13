let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const m = Number(input[1])

const graph = new Array(n+1).fill(0).map(() => new Array())
for(let i=1; i<=n ;i++) {
  const data = input[i+1].split(' ').map(Number)
  for(let j=1; j<=n; j++) {
    if (data[j-1] === 1) {
      graph[i].push(j)
    }
  }
}

const target = input[n+2].split(' ').map(Number)
const visited = new Array(n+1).fill(false)

function solution() {
  const stack = []
  stack.push(target[0])
  visited[target[0]] = true

  while(stack.length) {
    const node = stack.pop()

    for(const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true
        stack.push(next)
      }
    }
  }

  for(let i=0; i<m; i++) {
    if (!visited[target[i]]) return 'NO'
  }

  return 'YES'
}

console.log(solution())
