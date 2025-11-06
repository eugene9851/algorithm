let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const testCases = Number(input[0])

function findMinMax(arrays, k) {
  let min = Infinity
  let max = 0

  for(let j = 0; j < arrays.length; j++) {
    const array = arrays[j]
    for(let i = 0; i <= array.length - k; i++) {
      const diff = array[i + k - 1] - array[i] + 1

      min = Math.min(min, diff)
      max = Math.max(max, diff)
    }
  }

  return `${min} ${max}`
}

function findAnswer(word, k) {
  const info = {}
  for(let i = 0; i < word.length; i++) {
    if(!info[word[i]]) {
      info[word[i]] = [i]
    } else {
      info[word[i]].push(i)
    }
  }

  const values = Object.values(info).filter((array) => array.length >= k)
  if(values.length === 0) return -1

  return findMinMax(values, k)
}

function solution() {
  let n = 1
  while(n <= testCases) {
    const word = input[n * 2 - 1]
    const k = Number(input[n * 2])

    console.log(findAnswer(word, k))
    n++
  }
}

solution()
