function countDot(string) {
  return string.replace(/\.{2,}/g, ".")
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
  if(newID.startsWith(".")) newID = newID.substring(1)
  if(newID.endsWith(".")) newID = newID.slice(0, -1)

  //5단계 빈문자열이면 'a'대입
  if(newID === "") newID = "a"

  //6단계 16자 이상이면 첫15개 문자 이외 모두 제거, 마지막이 .이면 제거
  if(newID.length >= 16) {
    newID = newID.slice(0, 15)
    if(newID.endsWith(".")) newID = newID.slice(0, -1)
  }

  //7단계 2자 이하면 마지막 문자 반복
  while(newID.length <= 2) {
    newID += newID.charAt(newID.length - 1)
  }
  return newID
}

newID = "...!@BaT#*..y.abcdefghijklm"
console.log(solution(newID))