//name에 해당하는 그리움 점수 리턴하는 함수
// function findYearningScore(nameArray, yearningArray, name) {
//   const index = nameArray.indexOf(name);
//   if(index === -1) score = 0;
//   else score = yearningArray[index];
//   return score;
// }

//리팩토링1: findYearningScore함수에서 score가 선언되지 않고 사용됨. 지역변수로 선언하기
//리팩토링2: indexOf는 배열의 길이가 길 때 비효율적임. map, reduce함수 쓰는 것이 효율적
//         객체를 사용하는 것도 좋은 방법

function findYearningScore(nameToScoreMap, name) {
  return nameToScoreMap[name] || 0
}

// function solution(nameArray, yearningArray, photos) {
//   return photos.map((photoArray) => {
//     let score = 0;
//     photoArray.forEach((name) => {
//       score += findYearningScore(nameArray, yearningArray, name);
//     });
//     return score;
//   });
// }



function solution(nameArray, yearningArray, photos) {
  const nameToScoreMap = nameArray.reduce((map, name, index) => {
    map[name] = yearningArray[index]
    return map
  }, {})

  return photos.map((photoNames) => {
    return photoNames.reduce((score, name) => {
      return score + findYearningScore(nameToScoreMap, name)
    }, 0)
  })
}

nameArray = ["may", "kein", "kain", "radi"];
yearningArray = [5, 10, 1, 3];
photos = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log(solution(nameArray, yearningArray, photos));
