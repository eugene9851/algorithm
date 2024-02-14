function solution(x) {
  const sumAllNum = x
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  return x % sumAllNum === 0 ? true : false;
}

function solution2(x) {
  const numArray = String(x).split("").map(Number);
  const sumAllNum = numArray.reduce((acc, cur) => acc + cur, 0);
  return x % sumAllNum === 0 ? true : false;
}

console.log(solution(10));

console.log(solution2(10));
