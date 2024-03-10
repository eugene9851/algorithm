//선택지에 맞는 형과 점수 객체로 반환
function getTypeScore(survey, choice, obj) {
  if(choice <= 3) {
    obj[survey[0]] ? obj[survey[0]] += (4 - choice) : obj[survey[0]] = (4 - choice)
  } else if(choice >= 5 && choice <= 7) {
    obj[survey[1]] ? obj[survey[1]] += (choice - 4) : obj[survey[1]] = (choice - 4)
  }
}

//지표별 점수가 더 높은 성격유형 리턴
function getType(obj, type1, type2) {
  let type
  if(obj[type1] === obj[type2]) type = type1
  if(!obj[type1] && !obj[type2]) type = type1
  if(!obj[type1] && obj[type2]) type = type2
  if(obj[type1] && !obj[type2]) type = type1

  if(obj[type1] > obj[type2]) type = type1
  if(obj[type1] < obj[type2]) type = type2

  return type
}

function solution(survey, choices) {
  let typeScoreObj = {}

  for(let i = 0; i < survey.length; i++) {
    getTypeScore(survey[i], choices[i], typeScoreObj)
  }

  const first = getType(typeScoreObj, 'R', 'T')
  const second = getType(typeScoreObj, 'C', 'F')
  const third = getType(typeScoreObj, 'J', 'M')
  const fourth = getType(typeScoreObj, 'A', 'N')

  let answer = ""
  answer += (first + second + third + fourth)
  return answer
}

survey = ["AN", "CF", "MJ", "RT", "NA"]
choices = [5, 3, 2, 7, 5]

console.log(solution(survey, choices))