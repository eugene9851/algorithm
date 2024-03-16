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
  if(!obj[type1] && !obj[type2]) return type1
  return obj[type1] >= (obj[type2] || 0) ? type1 : type2
}

function solution(survey, choices) {
  let typeScoreObj = {}

  survey.forEach((types, index) => {
    getTypeScore(types, choices[index], typeScoreObj)
  })

  const personalityTypes = [
    ['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']
  ]

  let result = personalityTypes.map((types) => {
    return getType(typeScoreObj, ...types)
  }).join('')

  return result
}

survey = ["AN", "CF", "MJ", "RT", "NA"]
choices = [5, 3, 2, 7, 5]

console.log(solution(survey, choices))