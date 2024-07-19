//65min

let input = require('fs').readFileSync('../example.txt').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number)
let number = input[1].split('').map(Number)

function solution(n, k, number) {
  let stack = []

  for(let i = 0; i < n; i++) {
    const current = number[i]

    //스택이 채워져있고, 현재 값이 stack의 마지막 값보다 크고, k가 0보다 클 때(지워야 할 숫자가 남아있을 때)
    while(stack.length > 0 && stack[stack.length - 1] < current && k > 0) {
      //stack의 마지막 값을 현재 값으로 갱신하고 k-1
      stack.pop()
      k--
    }
    //스택이 비워져있거나, 현재 값이 작거나, k가 0이면 stack에 쌓기
    stack.push(current)
  }

  //k가 남아있으면 stack.pop()
  //ex. 2 1 /n 21
  for(let i = 0; i < k; i++) {
    stack.pop()
  }

  return stack.join('')
}

console.log(solution(n, k, number))