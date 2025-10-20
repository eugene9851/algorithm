let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n')
let number = input[0]

function solution(number) {
  let answer = 0;
  let idx = 0;

  while(idx < number.length) {
    answer++
    const string = answer.toString()

    for(let i=0; i<string.length && idx < number.length; i++) {
      if (string[i] === number[idx]) idx++
    }
  }
  return answer
}

console.log(solution(number))
