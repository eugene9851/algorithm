function solution(dartResult) {
  const pattern = /(\\d+)([SDT])([*#]?)/g
  //몇제곱할지 객체화
  const bonus = {
    'S': 1,
    'D': 2,
    'T': 3
  }
  let scores = [] //점수 저장할 배열. 나중에 다 더할 것

  dartResult.replace(pattern, (match, score, bonusType, option) => {
    console.log(match)
    let scoreValue = Math.pow(score, bonus[bonusType]) //S,D,T 계산

    if(option === '*') {
      if(scores.length) scores[scores.length - 1] *= 2 //이전 점수가 있으면 이전 점수*2
      scoreValue *= 2 //현재 점수*2
    }

    if(option === '#') {
      scoreValue *= -1 //현재점수*(-1)
    }

    scores.push(scoreValue)
  })

  return scores.reduce((acc, score) => acc + score, 0)
}

dartResult = "1D2S#10S"
console.log(solution(dartResult))