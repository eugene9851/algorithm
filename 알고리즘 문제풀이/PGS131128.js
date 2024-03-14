//배열에서 숫자형 num의 개수 구하는 함수. 배열의 요소는 문자형
function countNum(array, num) {
  //num이 시작되는 첫 인덱스 값
  const startIndex = array.indexOf(num.toString())

  //array에서 num이 아닌 값(num이 끝나는 인덱스+1)이 있으면 암묵적 endIndex = i
  for(let i = startIndex + 1; i < array.length; i++) {
    if(array[i] !== array[startIndex]) {
      return i - startIndex
    }
  }
  //그 값이 없으면 array에서 제일 큰 값이므로 암묵적으로 endIndex = array.length
  return array.length - startIndex
}

function solution(string1, string2) {
  //오름차순 배열로 정렬
  const numArray1 = string1.split('').sort()
  const numArray2 = string2.split('').sort()

  //결과값은 문자열
  let result = ""

  //숫자는 0부터 9까지. 만들 수 있는 가장 큰 정수를 리턴하므로 9부터 0 순으로 검색
  for(let num = 9; num >= 0; num--) {
    //배열의 요소는 문자형이므로 숫자를 문자형으로 변환
    const stringNum = num.toString()

    //두 배열에 숫자가 모두 포함된다면 연속되는 숫자가 적은만큼 반복
    if(numArray1.includes(stringNum) && numArray2.includes(stringNum)) {
      const minCount = Math.min(countNum(numArray1, num), countNum(numArray2, num))
      result += stringNum.repeat(minCount)
    }
  }

  //result가 2개 이상의 0으로 이루어진다면 "0" 반환
  if(result.startsWith("0")) return "0"

  //result가 계속 빈 문자열이면 -1 반환, 아니면 result 반환
  return result === "" ? "-1" : result
}

string1 = "12321"
string2 = "42531"
console.log(solution(string1, string2))