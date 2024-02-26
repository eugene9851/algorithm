function solution(cards1, cards2, goal) {
  //cards1의 index
  let index1 = 0;
  //cards2의 index
  let index2 = 0;
  //goal 순회하며 해당하는 word가 cards1이나 cards2의 index에 있으면
  //해당 index 1 더한 후 이어서 진행
  for (let i = 0; i < goal.length; i++) {
    if (cards1[index1] === goal[i]) index1++;
    else if (cards2[index2] === goal[i]) index2++;
    //없으면 바로 No 리턴
    else return "No";
  }
  //다 맞으면 Yes 리턴
  return "Yes";
}

cards1 = ["i", "water", "drink"];
cards2 = ["want", "to"];
goal = ["i", "want", "to", "drink", "water"];

console.log(solution(cards1, cards2, goal));
