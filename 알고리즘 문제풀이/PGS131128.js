function solution(X, Y) {
  const countX = Array(10).fill(0)
  const countY = Array(10).fill(0)

  //각 숫자별 등장 횟수 계산
  for(let char of X) countX[char]++
  for(let char of Y) countY[char]++

  //결과값은 문자열
  let result = ""

  //가능한 가장 큰 수 생성
  for(let i = 9; i >= 0; i--) {
    const commonCount = Math.min(countX[i], countY[i])
    if(commonCount > 0) result += String(i).repeat(commonCount)
  }

  if(result.length === 0) return "-1"
  else if(result[0] === '0') return "0"
  else return result
}

string1 = "12321"
string2 = "42531"
console.log(solution(string1, string2))