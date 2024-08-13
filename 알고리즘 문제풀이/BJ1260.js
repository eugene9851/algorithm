//35min

let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const [total, n, v] = input[0].split(' ').map(Number)

let graph = new Array(total + 1).fill(null).map(() => new Array(total + 1).fill(0))

for(let i = 0; i < n; i++) {
  const [start, end] = input[i + 1].split(' ').map(Number)
  graph[start][end] = 1
  graph[end][start] = 1
}

let dfs_visited = new Array(total + 1).fill(0)
let dfs_answer = []

function dfs(startNumber) {
  dfs_visited[startNumber] = 1
  dfs_answer.push(startNumber)

  for(let i = 1; i <= total; i++) {
    if(graph[startNumber][i] === 1 && dfs_visited[i] === 0) dfs(i)
  }
}
dfs(v)

let bfs_visited = new Array(total + 1).fill(0)
let bfs_answer = []

function bfs(startNumber) {
  let queue = []
  bfs_visited[startNumber] = 1
  bfs_answer.push(startNumber)
  queue.push(startNumber)

  while(queue.length !== 0) {
    let dequeue = queue.shift()

    for(let i = 1; i <= total; i++) {
      if(graph[dequeue][i] === 1 && bfs_visited[i] === 0) {
        bfs_visited[i] = 1
        queue.push(i)
        bfs_answer.push(i)
      }
    }
  }
}
bfs(v)

console.log(dfs_answer.join(' '))
console.log(bfs_answer.join(' '))