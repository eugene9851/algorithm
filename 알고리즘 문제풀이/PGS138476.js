//40min

function solution(k, tangerine) {
  //key의 값의 개수(value)
  let resultMap = {}

  for(let i = 0; i < tangerine.length; i++) {
    resultMap[tangerine[i]] ? resultMap[tangerine[i]]++ : resultMap[tangerine[i]] = 1
  }

  //value의 값만 모으고 내림차순 정렬
  const valueArray = Object.values(resultMap).sort((a, b) => b - a)

  let count = 0
  let i = 0
  while(i < valueArray.length) {
    count += valueArray[i]
    if(count >= k) break
    i++
  }
  return i + 1
}
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))