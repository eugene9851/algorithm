//20min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n')

const number = Number(input[0])

for(let i = 1; i <= number; i++) {
  let count = 0
  let array = input[i].split(' ').slice(1).map(Number)

  for(let j = 0; j < array.length - 1; j++) {
    for(let k = j + 1; k < array.length; k++) {
      if(array[j] > array[k]) {
        let temp = array[k]
        array[k] = array[j]
        array[j] = temp
        count++
      }
    }
  }
  console.log(i, count)
}