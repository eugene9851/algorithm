// function solution(array, commands) {
//   return commands.map(([i, j, k]) => {
//     return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
//   });
// }

//리팩토링1: 변수 이름 알아듣게 적기
//리팩토링2: 새로운 변수에 중간결과 저장하기

function solution(array, commands) {
  return commands.map(([start, end, position]) => {
    const slicedArray = array.slice(start - 1, end).sort((a, b) => a - b);
    return slicedArray[position - 1];
  });
}

array = [1, 5, 2, 6, 3, 7, 4];
commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
