const babblingObj = {
  'a' : 'aya',
  'y' : 'ye',
  'w' : 'woo',
  'm' : 'ma'
}

function isBabbling(word) {
  if(word.length===0) return true
  else if(word.length===1) return false

  const wordArray = word.split('')
  if(babblingObj[word[0]]) {
    const n = babblingObj[word[0]].length
    if(word.split('').slice(0,n).join('') === babblingObj[word[0]]) {
      return isBabbling(word.split('').splice(n).join(''))
    } else{
      return false
    }
  } else{
    return false
  }
}

function solution(babbling) {
  let count = 0
  babbling.forEach((word) => {
    if(isBabbling(word)) count++
  })
  return count
}
babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]
console.log(solution(babbling))