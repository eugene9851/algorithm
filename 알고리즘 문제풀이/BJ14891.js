let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const wheels = input.slice(0, 4).map((v) => v.split('').map(Number))
const k = Number(input[4])
const rotations = new Array(k).fill(0).map((_, idx) => input[idx+5].split(' ').map(Number))

function solution() {
  for(let i=0; i<k; i++) {
    const [wheelNumber, direction] = rotations[i]
    rotate(wheelNumber, direction)
  }

  const scores = {
    1: 1,
    2: 2,
    3: 4,
    4: 8
  }

  let result = 0

  for(let i=0; i<4; i++) {
    result += wheels[i][0] === 0 ? 0 : scores[i+1]
  }

  return result
}

function rotate(wheelNumber, direction) {
  const rotateInfo = new Array(4).fill(0)
  const cur = wheelNumber-1
  rotateInfo[cur] = direction

  for(let i=cur; i>0; i--) {
    if (wheels[i][6] !== wheels[i-1][2]) rotateInfo[i-1] = -rotateInfo[i]
    else break
  }

  for(let i=cur; i<3; i++) {
    if (wheels[i][2] !== wheels[i+1][6]) rotateInfo[i+1] = -rotateInfo[i]
    else break
  }

  for(let t=0; t<4; t++) {
    if (rotateInfo[t] === 0) continue
    else wheels[t] = changeWheel(wheels[t], rotateInfo[t])
  }
}

function changeWheel(wheel, direction) {
  if (direction === 1) {
    const last = wheel.pop()
    wheel.unshift(last)
  }
  else {
    const first = wheel.shift()
    wheel.push(first)
  }
}

console.log(solution())
