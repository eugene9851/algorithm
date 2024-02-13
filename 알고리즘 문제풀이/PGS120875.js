// function solution(dots) {
//   const [dot1, dot2, dot3, dot4] = dots;
//   if (
//     (dot1[1] - dot2[1]) / (dot1[0] - dot2[0]) ===
//       (dot3[1] - dot4[1]) / (dot3[0] - dot4[0]) ||
//     (dot1[1] - dot3[1]) / (dot1[0] - dot3[0]) ===
//       (dot2[1] - dot4[1]) / (dot2[0] - dot4[0]) ||
//     (dot1[1] - dot4[1]) / (dot1[0] - dot4[0]) ===
//       (dot3[1] - dot2[1]) / (dot3[0] - dot2[0])
//   ) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

//리팩토링1 : 최대한 기능별 함수 만들어보기

function getSlope(dot1, dot2) {
  if (dot1[0] === dot2[0]) return Infinity;
  return (dot1[1] - dot2[1]) / (dot1[0] - dot2[0]);
}

function solution(dots) {
  const [dot1, dot2, dot3, dot4] = dots;

  const slope12 = getSlope(dot1, dot2);
  const slope13 = getSlope(dot1, dot3);
  const slope14 = getSlope(dot1, dot4);
  const slope23 = getSlope(dot2, dot3);
  const slope24 = getSlope(dot2, dot4);
  const slope34 = getSlope(dot3, dot4);

  if (slope12 === slope34 || slope13 === slope24 || slope14 === slope23)
    return 1;
  else return 0;
}

dots = [
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
];
console.log(solution(dots));
