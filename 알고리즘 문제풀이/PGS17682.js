function solution(dartResult) {
  const dartScore = dartResult.split('')
  const exp = /\d/ //0~9까지의 숫자 정규표현식
  //몇제곱할지 객체화
  const bonus = {
    'S': 1,
    'D': 2,
    'T': 3
  }
  let currentScore = 0 //현재 score
  let prevScore = 0 //직전 score
  let totalScore = 0 //총점

  for(let i = 0; i < dartScore.length; i++) {
    if(exp.test(+dartScore[i])) { //숫자일 때
      let score = Number(dartScore[i])
      //다음 요소도 숫자면 score = 10
      if(exp.test(+dartScore[i]) && exp.test(+dartScore[i + 1])) {
        score = 10
        i++
      }
      //S, D, T에 따라 1제곱,2제곱,3제곱
      currentScore = Math.pow(score, bonus[dartScore[i + 1]])
      //#이 있으면 현재 점수*(-1)
      if(dartScore[i + 2] === '#') currentScore *= (-1)
      //*이 있으면 현재 점수*2, 직전 점수*2
      if(dartScore[i + 2] === "*") {
        prevScore *= 2
        currentScore *= 2
      }
      totalScore += prevScore //총점에 이전 점수 더하기
      prevScore = currentScore //현재 점수는 이전 점수가 됨
      currentScore = 0 //현재 점수 초기화
    }
  }
  totalScore += prevScore //마지막까지 돌면 totalScore에 prevScore 마저 더하기
  return totalScore
}
dartResult = "1D2S#10S"
console.log(solution(dartResult))