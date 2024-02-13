// const babblingObj = {
//   'a' : 'aya',
//   'y' : 'ye',
//   'w' : 'woo',
//   'm' : 'ma'
// }

// function isBabbling(word) {
//   if(word.length===0) return true
//   else if(word.length===1) return false

//   const wordArray = word.split('')
//   if(babblingObj[word[0]]) {
//     const n = babblingObj[word[0]].length
//     if(word.split('').slice(0,n).join('') === babblingObj[word[0]]) {
//       return isBabbling(word.split('').splice(n).join(''))
//     } else{
//       return false
//     }
//   } else{
//     return false
//   }
// }

// function solution(babbling) {
//   let count = 0
//   babbling.forEach((word) => {
//     if(isBabbling(word)) count++
//   })
//   return count
// }

//리팩토링1 : split, slice, join, splice 여러 번 호출하기보다 startsWith메서드 사용
//리팩토링2 : reduce메서드 사용 : 별도로 변수 설정할 필요 없이 바로 결과값 반환

const babblingArr = ['aya', 'ye', 'woo', 'ma']
function isBabbling(word) {
  if(word.length===0) return true

  for(let startWord of babblingArr) {
    if(word.startsWith(startWord)) {
      if(isBabbling(word.slice(startWord.length))) return true;
    }
  }
  return false
}

function solution(babbling) {
  return babbling.reduce((count, word) => count + Number(isBabbling(word)), 0)
}

babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]
console.log(solution(babbling))