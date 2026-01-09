let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, game] = input[0].split(' ')
const people = input.slice(1)
const removeDup = new Set(people)
const rules = {
  'Y': 2,
  'F': 3,
  'O': 4,
}
const neededCount = rules[game]
const totalPeople = removeDup.size

console.log(Math.floor(totalPeople/(neededCount-1)))