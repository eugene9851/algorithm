//30min

let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number)

let graph = Array.from({ length: n + 1 }, () => [])

for(let i = 1; i <= m; i++) {
  const [start, end] = input[i].split(' ')

  graph[+end].push(+start)
  //map(Number)=>시간초과
}

function dfs(start) {
  let stack = [start]
  let visited = new Array(n + 1).fill(false)
  visited[start] = true
  let count = 0 //해킹 가능한 컴퓨터 수

  while(stack.length) {
    const node = stack.pop()

    for(let next of graph[node]) {
      if(visited[next]) continue
      stack.push(next)
      visited[next] = true
      count++
    }
  }

  return count
}

let max = -1
let answer = []

for(let i = 1; i <= n; i++) {
  let count = dfs(i)

  if(count > max) {
    max = count
    answer = [i]
  } else if(count === max) {
    answer.push(i)
  }
}
console.log(answer.join(' '))