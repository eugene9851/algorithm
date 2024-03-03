// let count = 0;
// function solution(a, b, emptyBottle) {
//   //보유 중인 빈 병이 a개 미만이면 끝내기
//   if (emptyBottle < a) return count;

//   count += Math.floor(emptyBottle / a) * b;

//   //보유 중인 빈 병으로 마트에서 받는 콜라 병 수 + 마트에 주지 못한 콜라 병 수
//   emptyBottle = Math.floor(emptyBottle / a) * b + (emptyBottle % a);

//   return solution(a, b, emptyBottle);
// }

//리팩토링1: 전역변수 제거
//리팩토링2: 재귀함수 대신 반복문 사용
//리팩토링3: 변수명 확실하게

function solution(a, b, initialEmptyBottles) {
  let totalColaBottles = 0 //총 콜라 병 수
  let emptyBottles = initialEmptyBottles //초기 빈 병 수

  while(emptyBottles >= a) {
    //교환할 수 있는 콜라 병 수
    let exchangeableBottles = Math.floor(emptyBottles / a)
    totalColaBottles += exchangeableBottles * b

    emptyBottles = exchangeableBottles * b + emptyBottles % a
  }
  return totalColaBottles
}

a = 3;
b = 1;
n = 20;

console.log(solution(a, b, n));
