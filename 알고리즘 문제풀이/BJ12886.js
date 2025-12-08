let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const [a, b, c] = input[0].split(' ').map(Number).sort((a,b) => a-b)
const visited = new Array(1501).fill(0).map(() => new Array(1501).fill(false))

function solution(a, b, c) {
  if ((a+b+c) % 3 !== 0) return 0

  //a+b+c는 일정하므로 a, b만 써도 됨
  const queue = [[a, b, c]]
  visited[a][b] = true

  while(queue.length) {
    const [a, b, c] = queue.shift()
    if (a === b && b === c) return 1
    
    let pairs = [
      [a, b, c],
      [a, c, b],
      [b, c, a],
    ]

    for(let [x, y, z] of pairs) {
      if (x === y) continue
      if (x > y) {
        x = x-y
        y *= 2
      } else {
        y = y-x
        x *= 2
      }

      let next = [x, y, z].sort((a, b) => a-b)
      if(!visited[next[0]][next[1]]) {
        visited[next[0]][next[1]] = true
        queue.push([next[0], next[1], next[2]])
      }
    }
  }

  return 0
}

console.log(solution(a, b, c))
