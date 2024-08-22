//50min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [r, c, n] = input[0].split(' ').map(Number)

//n=1일 때 초기 상태
if(n === 1) {
  console.log(input.slice(1).join('\n'))
  return
}

//n이 짝수일 때 모두 폭탄
if(n % 2 === 0) {
  for(let i = 0; i < r; i++) {
    console.log(new Array(c).fill('O').join(''))
  }
  return
}

//폭발 후의 상태(n>=3)
function getNextExplosion(grid) {
  let graph = new Array(r).fill(null).map(() => new Array(c).fill('O'))
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(grid[i][j] === 'O') {
        graph[i][j] = '.'
        if(i - 1 >= 0 && i - 1 < r) graph[i - 1][j] = '.'
        if(i + 1 >= 0 && i + 1 < r) graph[i + 1][j] = '.'
        if(j - 1 >= 0 && j - 1 < c) graph[i][j - 1] = '.'
        if(j + 1 >= 0 && j + 1 < c) graph[i][j + 1] = '.'
      }
    }
  }

  return graph.map(row => row.join(''))
}

const initialState = input.slice(1)
const firstExp = getNextExplosion(initialState)
const secondExp = getNextExplosion(firstExp)

if(n % 4 === 3) {
  console.log(firstExp.join('\n'))
  return
}

if(n % 4 === 1) {
  console.log(secondExp.join('\n'))
}