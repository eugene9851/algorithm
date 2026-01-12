let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const graph = input.slice(1).map(v => v.split(' ').map(Number))
let answer = Infinity

function solution() {
  for(let x=0; x<n; x++) {
    for(let y=0; y<n; y++) {
      for(let d1=1; d1<n; d1++) {
        for(let d2=1; d2<n; d2++) {
          if (x+d1+d2>=n) continue;
          if (y-d1<0) continue;
          if (y+d2>=n) continue;

          answer = Math.min(answer, calculate(x, y, d1, d2))
        }
      }
    }
  }
}

function calculate(x, y, d1, d2) {
  const area = Array.from({ length: n }, () => Array(n).fill(0))

  for(let i=0; i<=d1; i++) {
    area[x+i][y-i] = 5
  }

  for(let i=0; i<=d2; i++) {
    area[x+i][y+i] = 5
  }

  for(let i=0; i<=d2; i++) {
    area[x+d1+i][y-d1+i] = 5
  }

  for(let i=0; i<=d1; i++) {
    area[x+d2+i][y+d2-i] = 5
  }

  for(let r=x; r<=x+d1+d2; r++) {
    let start = -1, end = -1
    for(let c=0; c<n; c++) {
      if (area[r][c] === 5) {
        if (start === -1) start = c
        end = c
      }
    }
    if (start !== -1) {
      for(let k=start; k<=end; k++) area[r][k] = 5
    }
  }

  for (let r = 0; r < x + d1; r++) {
    for (let c = 0; c <= y; c++) {
      if (area[r][c] === 5) break;
      area[r][c] = 1;
    }
  }

  for (let r = 0; r <= x + d2; r++) {
    for (let c = n-1; c > y; c--) {
      if (area[r][c] === 5) break;
      area[r][c] = 2;
    }
  }

  for (let r = x + d1; r < n; r++) {
    for (let c = 0; c < y - d1 + d2; c++) {
      if (area[r][c] === 5) break;
      area[r][c] = 3;
    }
  }

  for (let r = x + d2 + 1; r < n; r++) {
    for (let c = n-1; c >= y - d1 + d2; c--) {
      if (area[r][c] === 5) break;
      area[r][c] = 4;
    }
  }

  const sum = [0, 0, 0, 0, 0, 0]
  for(let r=0; r<n; r++) {
    for(let c=0; c<n; c++) {
      sum[area[r][c]] += graph[r][c]
    }
  }

  return Math.max(...sum.slice(1)) - Math.min(...sum.slice(1))
}

solution()
console.log(answer)
