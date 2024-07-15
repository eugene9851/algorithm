//35min

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const forkNum = Number(input[0])
const forks = input[1].split(' ').map(Number)
const loads = input[3].split(' ').map(Number)

function solution(forkNum, forks, loads) {
  //불가능하면 얼리리턴
  if(Math.max(...loads) > Math.max(...forks)) return -1

  //내림차순 정렬
  forks.sort((a, b) => b - a)
  loads.sort((a, b) => b - a)

  let answer = 0

  //forks와 loads를 순회하며 짐을 옮길 수 있으면 loads에서 해당 load 제거
  //forks를 한 바퀴 다 순회하면 answer+1
  while(loads.length) {
    for(let i = 0; i < forkNum; i++) {
      for(let j = 0; j < loads.length; j++) {
        if(forks[i] >= loads[j]) {
          loads.splice(j, 1)
          break
        }
      }
    }
    answer++
  }

  return answer
}

console.log(solution(forkNum, forks, loads))