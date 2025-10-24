let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, d, k, c] = input[0].split(' ').map(Number)
const susi = input.slice(1).map(Number)

function solution() {
  let max = 0
  for(let i = 0; i<n; i++) {
    let sliced = []
    if (i+k <= n) {
      sliced = susi.slice(i, i+k)
    } else {
      let sliced1 = susi.slice(i)
      let sliced2 = susi.slice(0, k-n+i)
      sliced.push(...sliced1)
      sliced.push(...sliced2)
    }
    sliced.push(c)
    const set = new Set(sliced)
    max = Math.max(max, set.size)
  }

  return max
}

console.log(solution())
