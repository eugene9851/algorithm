let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [row, column] = input[0].split(' ').map(Number)

const graph = input.slice(1).map(v => v.split(''))

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

let fireDist = new Array(row).fill(0).map(() => new Array(column).fill(Infinity))
let jihoonDist = new Array(row).fill(0).map(() => new Array(column).fill(-1))

const fireQ = []
const jihoonQ = []

for(let i=0; i<row; i++) {
  for(let j=0; j<column; j++) {
    if (graph[i][j] === 'J') {
      jihoonDist[i][j] = 0
      jihoonQ.push([i, j])
    }
    if (graph[i][j] === 'F') {
      fireDist[i][j] = 0
      fireQ.push([i, j])
    }
  }
}


function solution() {
  while(fireQ.length) {
    const [x, y] = fireQ.shift()

    for(let k=0; k<4; k++) {
      const nx = x + dx[k]
      const ny = y + dy[k]
      if (nx>=0 && nx<row && ny>=0 && ny<column && graph[nx][ny] !== '#' && fireDist[nx][ny] === Infinity) {
        fireDist[nx][ny] = fireDist[x][y] + 1
        fireQ.push([nx, ny])
      }
    }
  }

  while(jihoonQ.length) {
    const [x, y] = jihoonQ.shift()

    if (x === 0 || y === 0 || x === row-1 || y === column-1) {
      return jihoonDist[x][y] + 1
    }

    for(let k=0; k<4; k++) {
      const nx = x + dx[k]
      const ny = y + dy[k]

      if (nx>=0 && nx<row && ny>=0 && ny<column && graph[nx][ny] === '.' && jihoonDist[nx][ny] === -1) {
        if (jihoonDist[x][y] + 1 < fireDist[nx][ny]) {
          jihoonDist[nx][ny] = jihoonDist[x][y] + 1
          jihoonQ.push([nx, ny])
        }
      }
    }
  }

  return 'IMPOSSIBLE'
}

console.log(solution());
