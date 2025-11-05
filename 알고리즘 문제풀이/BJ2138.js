let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const start = input[1].split('').map(Number)
const target = input[2].split('').map(Number)

function changeSwitch(number) {
  return number === 0 ? 1 : 0
}

function toggle(start, idx) {
  for(let i=idx-1; i<=idx+1; i++) {
    if (i>=0 && i<start.length) start[i] = changeSwitch(start[i])
  }
}

function simulate(n, start, target, pressFirst) {
  const arr = [...start]
  let count = 0

  if (pressFirst) {
    toggle(arr, 0)
    count++
  }

  for(let i=1; i<n; i++) {
    if (arr[i-1] !== target[i-1]) {
      toggle(arr, i)
      count++
    }
  }

  return arr.join('') === target.join('') ? count : -1
}

function solution(start, target, n) {
  const switchFirst = simulate(n, start, target, true)
  const notSwitchFirst = simulate(n, start, target, false)

  if (switchFirst===-1 && notSwitchFirst===-1) return -1
  else if (switchFirst!==-1 && notSwitchFirst!==-1) return Math.min(switchFirst, notSwitchFirst)
  else return Math.max(switchFirst, notSwitchFirst)
}

console.log(solution(start, target, n))
