//45min

function solution(string) {
  let stack = []
  let result = 0 //올바른 문자열의 개수

  //문자열의 개수가 홀수이면 무조건 0
  if(string.length % 2 === 1) return 0

  for(let i = 0; i < string.length; i++) {
    let isRight = true
    let newString = string.slice(i) + string.slice(0, i) //문자열 회전
    for(let alphabet of newString) {
      if(alphabet === '(' || alphabet === '[' || alphabet === '{') stack.push(alphabet)
      else {
        let leftAlphabet = stack.pop()
        if(alphabet === ')' && leftAlphabet === '(') continue
        if(alphabet === '}' && leftAlphabet === '{') continue
        if(alphabet === ']' && leftAlphabet === '[') continue

        isRight = false
        break
      }
    }
    if(isRight) result++
  }
  return result
}

console.log(solution("[](){}"))