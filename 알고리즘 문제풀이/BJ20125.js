let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const graph = input.slice(1).map(v=>v.split(''))

let headX, headY
for(let i=0; i<n; i++) {
  for(let j=0; j<n; j++) {
    if (graph[i][j] === '*') {
      headX = i
      headY = j
      break
    }
  }
  if (headX !== undefined) break
}
const heartX = headX+1
const heartY = headY

let leftArm = 0
for(let i=heartY-1; i>=0; i--) {
  if (graph[heartX][i] === '*') leftArm++
  else break
}

let rightArm = 0
for(let i=heartY+1; i<n; i++) {
  if(graph[heartX][i] === '*') rightArm++
  else break
}

let waist = 0
let waistEndX = 0
for(let i=heartX+1; i<n; i++) {
  if (graph[i][heartY] === '*') {
    waist++
    waistEndX = i
  }
  else break
}

let leftLeg = 0
for(let i=waistEndX+1; i<n; i++) {
  if(graph[i][heartY-1] === '*') leftLeg++
  else break
}

let rightLeg = 0
for(let i=waistEndX+1; i<n; i++) {
  if(graph[i][heartY+1] === '*') rightLeg++
  else break
}

console.log(heartX+1, heartY+1)
console.log(leftArm, rightArm, waist, leftLeg, rightLeg)