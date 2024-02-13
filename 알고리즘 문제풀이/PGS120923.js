function solution(num, total) {
  let sum =
    total % 2 === 1
      ? (num * (num - 1)) / 2
      : ((num - 1) * (num - 2)) / 2 + (num - 1);

  const start = (total - sum) / num;
  let answer = [];
  for (let i = 0; i < num; i++) {
    answer.push(start + i);
  }
  return answer;
}

//리팩토링1 : Array.from({length:_}, (value, index) => i) => 길이가 _인 배열을 리턴

function solution(num, total) {
  const avg = total / num;
  const start = avg - (num - 1) / 2;

  return Array.from({ length: num }, (_, i) => start + i);
}
console.log(solution(5, 5));
