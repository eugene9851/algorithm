//2hr

function solution(n) {
  const answer = [];
  let numbers = [];
  let i = 1, j = 1;

  while(i <= n) {
    numbers.push(i);
    let total = 0;
    for(const num of numbers) {
      total += num;
    }
    if(total === n) {
      answer.push(numbers.shift());
      i = j++;
    } else if(total > n) {
      numbers = [];
      i = j++;
    }
    i++;
  }

  return answer.length;
}
number = 15
console.log(solution(number))