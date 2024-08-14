//25min

let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const n = Number(input[0])
let graph = new Array(n + 1).fill(0).map(() => [])
let visited = new Array(n + 1).fill(0)
let parentNodes = new Array(n + 1).fill(null)

for(let i = 0; i < n - 1; i++) {
  const [start, end] = input[i + 1].split(' ').map(Number)
  graph[start].push(end)
  graph[end].push(start)
}

function dfs(v) {
  if(visited[v]) return

  visited[v] = 1

  graph[v].forEach((node) => {
    if(!visited[node]) parentNodes[node] = v

    dfs(node)
  })
}

dfs(1)

let answer = ''

for(let i = 2; i < n; i++) {
  answer += parentNodes[i] + '\n'
}
console.log(answer + parentNodes[n])