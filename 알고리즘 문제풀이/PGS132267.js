let count = 0;
function solution(a, b, emptyBottle) {
  //보유 중인 빈 병이 a개 미만이면 끝내기
  if (emptyBottle < a) return count;

  count += Math.floor(emptyBottle / a) * b;

  //보유 중인 빈 병으로 마트에서 받는 콜라 병 수 + 마트에 주지 못한 콜라 병 수
  emptyBottle = Math.floor(emptyBottle / a) * b + (emptyBottle % a);

  return solution(a, b, emptyBottle);
}

a = 3;
b = 1;
n = 20;

console.log(solution(a, b, n));
