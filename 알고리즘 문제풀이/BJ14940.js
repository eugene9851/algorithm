//95min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number)

let graph = input.slice(1).map(line => line.split(' ').map(Number))

let visited = new Array(n).fill(0).map(() => new Array(m).fill(0))
let answer = new Array(n).fill(0).map(() => new Array(m).fill(0))

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

//2(출발 지점)
function findTarget() {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(graph[i][j] === 2) return [i, j]
    }
  }
}

//출발지점부터 각 좌표까지의 거리
function bfs(start) {
  const queue = [start]
  const [sy, sx] = start
  visited[sy][sx] = 1

  while(queue.length) {
    const [y, x] = queue.shift()

    for(let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]

      //범위에 맞지 않으면 skip
      if(nx >= 0 && nx < m && ny >= 0 && ny < n && graph[ny][nx] !== 0 && !visited[ny][nx]) {
        visited[ny][nx] = 1
        queue.push([ny, nx])
        answer[ny][nx] = answer[y][x] + 1
      }
    }
  }
}

const target = findTarget()
bfs(target)

answer.forEach((line, i) => {
  line.forEach((spot, j) => {
    //유효한 길이지만 2까지 갈 수 없는 경우 -1
    if(!spot && graph[i][j] === 1) {
      answer[i][j] = -1;
    }
  });
  console.log(line.join(' '));
});