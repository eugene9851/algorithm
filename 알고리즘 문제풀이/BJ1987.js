let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number)
const graph = []
for(let i=1; i<=r; i++) {
  graph.push(input[i].split(''))
}
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

const visited = new Array(26).fill(false)
let answer = 0

function dfs(x, y, count) {
  answer = Math.max(count, answer)

  for(let i=0; i<4; i++) {
    const nx = x + dx[i]
    const ny = y + dy[i]

    if (nx>=0 && nx<r && ny>=0 && ny<c) {
      if (visited[graph[nx][ny].charCodeAt()-65] === false) {
        visited[graph[nx][ny].charCodeAt()-65] = true
        dfs(nx, ny, count+1)
        visited[graph[nx][ny].charCodeAt()-65] = false
      }
    }
  }
}

visited[graph[0][0].charCodeAt(0)-65] = true
dfs(0,0,1)
console.log(answer)
