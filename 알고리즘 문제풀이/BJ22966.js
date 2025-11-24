let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const buildings = input[1].split(' ').map(Number)

function solution() {
  const count = new Array(n).fill(0)
  const nearest = new Array(n).fill(-1)

  const leftStack = []
  for(let i=0; i<n; i++) {
    while(leftStack.length && buildings[i] >= buildings[leftStack[leftStack.length-1]]) {
      leftStack.pop()
    }
    count[i] += leftStack.length

    if (leftStack.length) {
      const idx = leftStack[leftStack.length - 1]
      if (nearest[i] === -1 || Math.abs(i-idx) < Math.abs(i-nearest[i])) {
        nearest[i] = idx
      }
    }
    leftStack.push(i)
  }

  const rightStack=[]
  for(let i=n-1; i>=0; i--) {
    while(rightStack.length && buildings[i] >= buildings[rightStack[rightStack.length-1]]) {
      rightStack.pop()
    }
    count[i] += rightStack.length

    if(rightStack.length) {
      const idx = rightStack[rightStack.length-1]
      if (nearest[i] === -1 || Math.abs(i-idx) < Math.abs(i-nearest[i])) {
        nearest[i] = idx
      }
    }
    rightStack.push(i)
  }

  for(let i=0; i<n; i++) {
    if(count[i] === 0) {
      console.log(0)
      continue;
    } else {
      console.log(count[i], nearest[i]+1)
    }
  }
}

solution()
