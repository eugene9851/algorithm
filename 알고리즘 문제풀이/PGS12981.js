//20min

function solution(n, words) {
  let index;
  for(let i = 1; i < words.length; i++) {
    if(words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      index = i
      break
    }
    if(words.slice(0, i).includes(words[i])) {
      index = i
      break
    }
  }
  if(!index) return [0, 0]
  console.log('i', index)

  const num = Math.ceil((index + 1) / n)
  const turn = (index + 1) % n ? (index + 1) % n : n
  return [turn, num]
}

n = 2
words = ["hello", "one", "even", "never", "now", "world", "draw"]
console.log(solution(n, words))