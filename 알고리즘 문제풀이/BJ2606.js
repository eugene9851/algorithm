let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const n = Number(input[0])
const m = Number(input[1])

const graph = new Array(n + 1).fill(null).map(() => [])

for (let i = 0; i < m; i++) {
  const [a, b] = input[i + 2].split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

let count = 0
const visited = new Array(n + 1).fill(false)

function bfs(graph, start) {
  const queue = [start]
  visited[start] = true

  while (queue.length > 0) {
    const node = queue.shift()
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true
        queue.push(neighbor)
        count++
      }
    }
  }
  return count
}

console.log(bfs(graph, 1))