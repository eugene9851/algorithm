let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const n = Number(input[0])
const graph = new Array(n).fill(0).map((_, idx)=> input[idx+1].split(''))

// 상우하좌
const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]

let doors = []

for(let i=0; i<n; i++) {
  for(let j=0; j<n; j++) {
    if (graph[i][j] === '#') doors.push([i, j])
  }
}

const [sx, sy] = doors[0]
const [ex, ey] = doors[1]

const visited = Array.from({length: n}, () => Array.from({length: n}, () => Array(4).fill(Infinity)))

let queue = []

function push(x, y, direction, count) {
  if (visited[x][y][direction] > count) {
    visited[x][y][direction] = count
    queue.push([count, x, y, direction])
  }
}

for(let i=0; i<4; i++) {
  push(sx, sy, i, 0)
}

while(queue.length) {
  queue.sort((a, b) => a[0]-b[0]) // count가 가장 낮은 것부터 처리
  let [count, x, y, dir] = queue.shift()

  if (count > visited[x][y][dir]) continue

  let nx = x + dx[dir]
  let ny = y + dy[dir]
  if (nx<0 || nx>=n || ny<0 || ny>=n) continue
  if(graph[nx][ny] === '*') continue

  // 직진
  push(nx, ny, dir, count)

  // 거울 설치
  if (graph[nx][ny] === '!') {
    let left = (dir+3) % 4
    let right = (dir+1) % 4

    push(nx, ny, left, count+1)
    push(nx, ny, right, count+1)
  }
}

let answer = Infinity
for(let i=0; i<4; i++) {
  answer = Math.min(answer, visited[ex][ey][i])
}

console.log(answer)
