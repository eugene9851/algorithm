let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const [n, b] = input[0].split(' ').map(Number)

const origin = input.slice(1, n+1).map(v => v.split(' ').map(s => Number(s)%1000))

//행렬
function multiply(x, y) {
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      for(let k=0; k<n; k++) {
        result[i][j] = (result[i][j] + x[i][k] * y[k][j]) % 1000
      }
    }
  }
  return result
}

function recursive(matrix, b) {
  if (b === 1) return matrix

  const half = recursive(matrix, Math.floor(b/2))
  let result = multiply(half, half)
  if (b % 2 === 1) {
    result = multiply(result, matrix)
  }
  return result
}

const answer = recursive(origin, b)

console.log(answer.map((v) => v.join(' ')).join('\n'))
