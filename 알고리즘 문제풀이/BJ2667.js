//40min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])

let graph = new Array(n).fill(null).map(() => [])
for(let i = 0; i < n; i++) {
  graph[i].push(...input[i + 1].split('').map(Number))
}

const visited = new Array(n).fill(null).map(() => new Array(n).fill(false))
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]

let count_home = 0 //각 단지 안 집의 개수
let count_total = 0 //전체 단지 수
let answer = [] //count_home을 담은 배열

function dfs(x, y) {
  if(graph[x][y] === 1 && visited[x][y] === false) {
    visited[x][y] = true
    count_home++

    for(let i = 0; i < 4; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]
      if(nx >= 0 && nx < n && ny >= 0 && ny < n) {
        dfs(nx, ny)
      }
    }
  }
}

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(graph[i][j] === 1 && visited[i][j] === false) {
      dfs(i, j)
      count_total++
      answer.push(count_home)
      count_home = 0
    }
  }
}

console.log(count_total)
console.log(answer.sort((a, b) => a - b).join('\n'))