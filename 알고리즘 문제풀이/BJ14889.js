let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const n = Number(input[0])
const graph = new Array(n).fill(0).map((_, idx) => input[idx+1].split(' ').map(Number))

let answer = Infinity
const people = []
for(let i=1; i<n; i++) people.push(i) // 0번은 start로 고정

function combination(array, start, count, selected) {
  // array: 조합 대상 배열
  // start: 다음에 선택할 수 있는 시작 인덱스
  // count: 앞으로 뽑아야 할 개수
  // selected: 현재까지 뽑은 원소들
  if (count === 0) {
    calculate(selected)
    return;
  }

  // i를 선택했을 때 남은 원소 수가 count 이상이어야 가능
  for(let i=start; i<=array.length-count; i++) {
    selected.push(array[i])
    combination(array, i+1, count-1, selected)
    selected.pop()
  }
}

function calculate(selected) {
  const start = [0, ...selected]
  const link = []

  const isStart = new Array(n).fill(false)
  start.forEach(v => isStart[v] = true)

  for(let i=0; i<n; i++) {
    if (!isStart[i]) link.push(i)
  }

  let startScore = 0
  let linkScore = 0

  for(let i=0; i<start.length; i++) {
    for(let j=i+1; j<start.length; j++) {
      const a = start[i]
      const b = start[j]
      startScore += graph[a][b] + graph[b][a]
    }
  }

  for(let i=0; i<link.length; i++) {
    for(let j=i+1; j<link.length; j++) {
      const a = link[i]
      const b = link[j]
      linkScore += graph[a][b] + graph[b][a]
    }
  }

  answer = Math.min(answer, Math.abs(startScore-linkScore))
}

combination(people, 0, n/2-1, [])

console.log(answer)
