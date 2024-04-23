//15min

function solution(n, a, b) {
  let i = 1
  while(Math.pow(2, i) <= n) {
    const divA = a / Math.pow(2, i)
    const divB = b / Math.pow(2, i)
    if(Math.ceil(divA) === Math.ceil(divB)) return i
    i++
  }
}

console.log(solution(16, 4, 7))