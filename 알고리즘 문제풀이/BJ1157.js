//8min + 15min(런타임 에러)
let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n')
const word = input[0].toUpperCase()

let obj = {}

for(let i = 0; i < word.length; i++) {
  if(obj[word[i]]) obj[word[i]]++
  else obj[word[i]] = 1
}

let result = ''
let count = 0

for(char in obj) {
  if(obj[char] > count) {
    count = obj[char]
    result = char
  } else if(obj[char] === count) result = '?'
}
console.log(result)

// 런타임에러
// const array = Object.entries(obj)
// array.sort((a, b) => b[1] - a[1])

// if(array[0][1] === array[1][1]) console.log('?')
// else console.log(array[0][0])