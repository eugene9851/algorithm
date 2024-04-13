//10.27
//h-index가 citrations의 요소일 필요는 없다!

function solution(citations) {
  citations.sort((a, b) => b - a)
  let count = 0
  for(let i = 0; i < citations.length; i++) {
    if(citations[i] > i) count++
  }
  return count
}

citations = [3, 0, 6, 1, 5]
console.log(solution(citations))