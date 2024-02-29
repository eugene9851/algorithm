let result = 0

//분해 조건을 만족하면 분해하고 result 1 더하는 함수
function slicePart(array) {
  let firstStringCount = 0
  let otherStringCount = 0

  //처음으로 두 횟수가 같아지는 순간 멈추고 문자열 분리
  //재귀함수를 이용하여 분리된 문자열로 다시 실행
  for(let i = 0; i < array.length; i++) {
    array[i] === array[0] ? firstStringCount++ : otherStringCount++

    if(firstStringCount === otherStringCount) {
      newArray = array.slice(i + 1)
      result++
      return slicePart(newArray)
    }
  }

  //두 횟수가 다른 상태에서 더 이상 읽을 글자 없으면 result에 1 더하고 종료
  if(firstStringCount !== otherStringCount) result++
}

function solution(string) {
  //문자열을 배열로 변환
  let stringArray = string.split('')

  //slicePart함수를 통해 result 구하기
  slicePart(stringArray)

  return result
}

string = "abracadabra"
console.log(solution(string))