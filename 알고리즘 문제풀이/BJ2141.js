//30min

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])
let location = []
for(let i = 1; i <= n; i++) {
  location.push(input[i].split(' ').map(Number))
}


function solution(n, location) {
  location.sort((a, b) => a[0] - b[0]) //마을 위치 오름차순 정렬

  let totalPeople = location.reduce((acc, cur) => acc + cur[1], 0) //마을 안 전체 인구 수
  let sum = 0 //마을을 순회하며 현재까지의 인구 수

  for(let i = 0; i < n; i++) {
    sum += location[i][1]
    //마을을 돌면서 전체 인구 수의 절반을 넘거나 같은 지점이 우체국을 놓는 지점이다
    if(totalPeople / 2 <= sum) return location[i][0]
  }

  return location[n - 1][0]
}

console.log(solution(n, location))