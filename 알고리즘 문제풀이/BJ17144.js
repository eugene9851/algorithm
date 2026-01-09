let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const [r, c, t] = input[0].split(' ').map(Number)
const graph = input.slice(1).map(v => v.split(' ').map(Number))

let clearRow = 0
for(let i=0; i<r; i++) {
  if (graph[i][0] === -1) {
    clearRow = i
    break
  }
}

function copyGraph(graph) {
  let spread = new Array(r).fill(0).map(() => new Array(c).fill(0))
  for(let i=0; i<r; i++) {
    for(let j=0; j<c; j++) {
      if (graph[i][j] !== 0) spread[i][j] = graph[i][j]
    }
  }

  return spread
}

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

function spreadBySec(graph, r, c) {
  let spread = copyGraph(graph)
  for(let i=0; i<r; i++) {
    for(let j=0; j<c; j++) {
      if (graph[i][j] > 0) {
        for(let k=0; k<4; k++) {
          const nx = i + dx[k]
          const ny = j + dy[k]
          if (nx>=0 && nx < r && ny>=0 && ny<c && graph[nx][ny] !== -1) {
            spread[nx][ny] += Math.floor(graph[i][j]/5)
            spread[i][j] -= Math.floor(graph[i][j]/5)
          }
        }
      }
      else continue
    }
  }

  return spread
}

function clearByWind(spread, clearRow) {
  for(let i=clearRow-1; i>0; i--) {
    spread[i][0] = spread[i-1][0]
  }
  for(let i=0; i<c-1; i++) {
    spread[0][i] = spread[0][i+1]
  }
  for(let i=0; i<clearRow; i++) {
    spread[i][c-1] = spread[i+1][c-1]
  }
  for(let i=c-1; i>1; i--) {
    spread[clearRow][i] = spread[clearRow][i-1]
  }
  spread[clearRow][1] = 0

  for(let i=clearRow+2; i<r-1; i++) {
    spread[i][0] = spread[i+1][0]
  }
  for(let i=0; i<c-1; i++) {
    spread[r-1][i] = spread[r-1][i+1]
  }
  for(let i=r-1; i>clearRow+1; i--) {
    spread[i][c-1] = spread[i-1][c-1]
  }
  for(let i=c-1; i>1; i--) {
    spread[clearRow+1][i] = spread[clearRow+1][i-1]
  }
  spread[clearRow+1][1] = 0

  return spread
}

function solution() {
  let newGraph = copyGraph(graph)
  let time = t
  while(time>0) {
    const spread = spreadBySec(newGraph, r, c)
    newGraph = clearByWind(spread, clearRow)
    time--
  }

  return newGraph
}

const finalGraph = solution()
const result = finalGraph.reduce((sum, row) => sum + row.reduce((acc, cur) => cur > 0 ? acc+cur : acc, 0), 0)

console.log(result)
