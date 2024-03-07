function countDot(string) {
  let count = 0

  const dotIndex = string.indexOf('.')

  for(let i = dotIndex; i < string.length; i++) {
    if(string[i] === '.') count++
    else break
  }
  if(count === 1) return string

  // string = string.split('').splice(dotIndex + 1, count - 1).join('')
  else {
    let newString = string.split('').slice(0, dotIndex).join('') + string.split('').slice(dotIndex + count).join('')
    return countDot(newString)
  }
}

function solution(newID) {
  //1단계 소문자로 치환
  newID = newID.toLowerCase()

  //2단계 해당하지 않는 문자 제거
  const reg = /[~!@#$%^&*()=+[{\]}:?,<>/]/g
  newID = newID.replace(reg, "")

  //3단계 . 연속부분 하나로 치환
  newID = countDot(newID)
  console.log(newID)

  //4단계 처음과 끝 . 있으면 제거
  const idArray = newID.split('')
  if(idArray[0] === ".") idArray.shift()
  if(idArray[idArray.length - 1] === '.') idArray.pop()

  newID = idArray.join('')

  //5단계 빈문자열이면 'a'대입
  if(newID === "") newID = "a"

  //6단계 16자 이상이면 첫15개 문자 이외 모두 제거, 마지막이 .이면 제거
  if(newID.length >= 16) {
    let newArray = newID.split('').slice(0, 15)
    if(newArray[newArray.length - 1] === '.') newArray.pop()

    newID = newArray.join('')
  }

  //7단계 2자 이하면 마지막 문자 반복
  if(newID.length <= 2) {
    newID += newID[newID.length - 1].repeat(3 - newID.length)
  }
  return newID
}

newID = "...!@BaT#*..y.abcdefghijklm"
console.log(solution(newID))