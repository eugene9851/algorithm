//90min

function solution(msg) {
  //기본 대문자 알파벳 번호로 이루어진 객체 생성
  let code = {}
  for(let i = 65; i <= 90; i++) {
    code[String.fromCharCode(i)] = i - 64
  }

  let lastNum = 26 //code 객체의 마지막 번호 추적

  let result = []
  let currentWord = "" //현재 단어

  for(let i = 0; i < msg.length; i++) {
    let currentAlph = msg[i] //현재 보고 있는 알파벳
    let newWord = currentAlph + currentWord //현재 단어+현재 보고있는 알파벳

    if(code[newWord]) { //code에 newWord가 있으면
      currentWord = newWord //currentWord 갱신
    } else { //code에 newWord가 없으면
      result.push(code[currentWord]) //currentWord의 번호 push
      lastNum++ //lastNum+1해서
      code[newWord] = lastNum //code 객체에 추가
      currentWord = currentAlph //현재 단어는 현재 알파벳으로 재시작
    }
  }

  //다 끝나고 currentWord가 갱신된 채로 끝나면 해당 번호 push
  if(currentWord !== "") result.push(code[currentWord])

  return result
}

console.log(solution('KAKAO'))