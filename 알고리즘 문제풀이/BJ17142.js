let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number)
const graph = input.slice(1).map(v => v.split(' ').map(Number))
const virus = []

//가능한 바이러스 좌표의 집합
for(let i=0; i<n; i++) {
  for(let j=0; j<n; j++) {
    if (graph[i][j] === 2) {
      virus.push([i, j])
    }
  }
}

//실제 활성화되는 바이러스 경우의 수
function combination(virus, start, count, selected) {
  if (count === 0) {
    solution(selected)
    return;
  }

  for(let i=start; i<=virus.length-count; i++) {
    selected.push(virus[i])
    combination(virus, i+1, count-1, selected)
    selected.pop()
  }
}

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

let answer = Infinity

function solution(selected) {
  //벽은 '-', 활성화된 바이러스는 '0', 나머지는 '-1'
  //전염 여부를 '-1'인지, 숫자(전염까지 걸린 시간)인지로 구분
  const copy = Array.from({ length: n }, () => Array(n).fill(-1))
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      if(graph[i][j] === 1) copy[i][j] = '-'
    }
  }

  //전염 좌표
  const queue = []

  for(const [virusX, virusY] of selected) {
    copy[virusX][virusY] = 0
    queue.push([virusX, virusY])
  }

  let maxTime = 0

  while(queue.length) {
    const [x, y] = queue.shift()

    for(let j=0; j<4; j++) {
      const nx = x + dx[j]
      const ny = y + dy[j]

      if (nx >=0 && nx<n && ny>=0 && ny<n && copy[nx][ny] === -1) {
        copy[nx][ny] = copy[x][y] + 1
        queue.push([nx, ny])

        //비활성 바이러스는 감염 대상이 아님
        if (graph[nx][ny] === 0) {
          maxTime = Math.max(maxTime, copy[nx][ny])
        }
      }
    }
  }

  //전염되지 않은 곳이 있으면 early return
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      if (graph[i][j] === 0 && copy[i][j] === -1) return;
    }
  }

  answer = Math.min(answer, maxTime)
}

combination(virus, 0, m, [])

console.log(answer === Infinity ? -1 : answer)