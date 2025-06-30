let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m, start] = input[0].split(' ').map(Number)
const graph = Array.from({ length: n + 1 }, () => [])
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

graph.forEach(arr => arr.sort((a, b) => a - b))

const dfsVisited = new Array(n + 1).fill(false)
const stack = []

function dfs(graph, start) {
  stack.push(start)
  dfsVisited[start] = true

  for (let neighbor of graph[start]) {
    if (!dfsVisited[neighbor]) {
      dfs(graph, neighbor)
    }
  }

  return stack
}

const bfsVisited = new Array(n + 1).fill(false)
const order = []

function bfs(graph, start) {
  const queue = [start]
  bfsVisited[start] = true

  while (queue.length > 0) {
    const node = queue.shift()
    order.push(node)
    for (let neighbor of graph[node]) {
      if (!bfsVisited[neighbor]) {
        bfsVisited[neighbor] = true
        queue.push(neighbor)
      }
    }
  }

  return order
}

console.log(dfs(graph, start).join(' '))
console.log(bfs(graph, start).join(' '))