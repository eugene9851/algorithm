//15min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n')

const total = Number(input[0])

function solution(sum, person) {
  if(total - sum === 1 || total - sum === 3) {
    return person
  }

  if(total - sum > 3) sum += 3
  else sum++

  if(person === 'SK') person = 'CY'
  else person = 'SK'

  return solution(sum, person)
}

console.log(solution(0, 'SK'))