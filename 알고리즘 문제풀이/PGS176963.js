//name에 해당하는 그리움 점수 리턴하는 함수
function findYearningScore(nameArray, yearningArray, name) {
  const index = nameArray.indexOf(name);
  if (index === -1) score = 0;
  else score = yearningArray[index];
  return score;
}

function solution(nameArray, yearningArray, photo) {
  return photo.map((photoArray) => {
    let score = 0;
    photoArray.forEach((name) => {
      score += findYearningScore(nameArray, yearningArray, name);
    });
    return score;
  });
}

nameArray = ["may", "kein", "kain", "radi"];
yearningArray = [5, 10, 1, 3];
photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log(solution(nameArray, yearningArray, photo));
