//23min

function dfs(begin, target, words, resultCount) {
  let min = Infinity //최소의 단계를 거침

  for(let i = 0; i < words.length; i++) {
    //하나의 알파벳만 다른지 확인
    let nextCount = 0 //서로 다른 알파벳의 수
    let newBegin
    let newWords = [...words]

    words[i].split('').forEach((alph, idx) => {
      if(begin[idx] !== alph) nextCount++ //서로 다르면 +1
    })
    //서로 다른 알파벳의 수가 1이 아니면 해당 단어로 바꿀 수 없음
    if(nextCount !== 1) continue
    //서로 다른 알파벳의 수가 1이면
    else {
      let newResultCount = resultCount + 1 //바꾼 횟수 +1

      if(words[i] === target) return newResultCount //바꾼 단어가 target이면 리턴

      newBegin = words[i] //begin단어 갱신
      newWords.splice(i, 1) //words array 갱신
      min = Math.min(min, dfs(newBegin, target, newWords, newResultCount)) //최솟값 갱신
    }
  }
  return min
}

function solution(begin, target, words) {
  if(!words.includes(target)) return 0 //처음부터 target단어가 없으면 얼리리턴

  return dfs(begin, target, words, 0)
}

begin = 'hit'
target = 'cog'
words = ["hot", "dot", "dog", "lot", "log", "cog"]
console.log(solution(begin, target, words))