//20min

function solution(n, totalNum, peopleNum, tubeOrder) {
  let result = ""
  let i = 0

  while(result.length < totalNum * peopleNum) {
    result += i.toString(n)
    // console.log(result)

    i++
  }

  let answer = ""
  for(let i = 0; i < totalNum; i++) {
    answer += result[i * peopleNum + tubeOrder - 1]
  }
  return answer.toUpperCase()
}

console.log(solution(16, 16, 2, 2))