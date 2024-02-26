//명예의 전당 top K
function topK(k, score, honorArea) {
  //k일차까지는 명예의 전당에 무조건 입성
  if (honorArea.length < k) {
    honorArea.push(score);
  } else if (honorArea[k - 1] < score) {
    //명예의 전당에 k개의 점수가 꽉 차있고,
    //새로 발표된 점수가 명예의 전당의 가장 작은 점수보다 크면
    //가장 작은 점수 빼고 새로운 점수 넣기
    honorArea.pop();
    honorArea.push(score);
  }
  //내림차순 정렬(마지막 점수를 정답 배열에 넣기 위해)
  sortedHonorArea = honorArea.sort((a, b) => b - a);
  return sortedHonorArea;
}

function solution(k, scores) {
  //명예의 전당
  let honorArea = [];

  //명예의 전당의 최하위 점수
  let answer = [];

  //발표점수의 초기값은 무조건 1일차 점수
  let prevScore = scores[0];

  for (let i = 0; i < scores.length; i++) {
    honorArea = topK(k, scores[i], honorArea);
    prevScore = honorArea[honorArea.length - 1];
    answer.push(prevScore);
  }
  return answer;
}

k = 3;
scores = [10, 100, 20, 150, 1, 100, 200];

console.log(solution(k, scores));
