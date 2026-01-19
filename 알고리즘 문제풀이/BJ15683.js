let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number)
const graph = input.slice(1).map(v => v.split(' ').map(Number))
const cctvs = []

for(let i=0; i<n; i++) {
  for(let j=0; j<m; j++) {
    if (graph[i][j] >= 1 && graph[i][j] <= 5) cctvs.push([i, j, graph[i][j]])
  }
}

const dirs = [
  [-1, 0], [0, 1], [1, 0], [0, -1]
]

const cctvDirs = {
  1: [[0], [1], [2], [3]],
  2: [[0, 2], [1, 3]],
  3: [[0, 1], [1, 2], [2, 3], [3, 0]],
  4: [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
  5: [[0, 1, 2, 3]]
}

let answer = Infinity

function watch(temp, x, y, dir) {
  let nx = x
  let ny = y

  while(true) {
    nx += dirs[dir][0]
    ny += dirs[dir][1]

    if (nx<0 || nx>=n || ny<0 || ny>=m) break
    if (temp[nx][ny] === 6) break
    if (temp[nx][ny] === 0) temp[nx][ny] = -1
  }
}

function dfs(idx, curBoard) {
  if (idx == cctvs.length) {
    let count = 0
    for(let i=0; i<n; i++) {
      for(let j=0; j<m; j++) {
        if (curBoard[i][j]===0) count++
      }
    }
    answer = Math.min(answer, count)
    return;
  }

  const [x, y, type] = cctvs[idx]
  for(const caseDirs of cctvDirs[type]) {
    const temp = curBoard.map(row => [...row])
    for(const d of caseDirs) {
      watch(temp, x, y, d)
    }

    dfs(idx+1, temp)
  }
}

dfs(0, graph)
console.log(answer)