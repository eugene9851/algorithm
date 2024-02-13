// function solution(a,b,c,d) {
//   if(a===b&&a===c&&a===d) return 1111*a

//   if(a===b&&a===c) return (10*a+d)**2
//   if(a===b&&a===d) return (10*a+c)**2
//   if(a===c&&a===d) return (10*a+b)**2
//   if(b===c&&b===d) return (10*b+a)**2

//   if(a===b&&c===d) return (a+c)*(Math.abs(a-c))
//   if(a===c&&b===d) return (a+b)*(Math.abs(a-b))
//   if(a===d&&b===c) return (a+b)*(Math.abs(a-b))

//   if(a===b) return c*d
//   if(a===c) return b*d
//   if(a===d) return b*c
//   if(b===c) return a*d
//   if(b===d) return a*c
//   if(c===d) return a*b

//   return Math.min(a,b,c,d)
// }

//리팩토링1 : 공통되는 연산은 함수로 만들기

function solution(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a;

  const equalThree = (same, diff) => (10 * same + diff) ** 2;
  if (a === b && a === c) return equalThree(a, d);
  if (a === b && a === d) return equalThree(a, c);
  if (a === c && a === d) return equalThree(a, b);
  if (b === c && b === d) return equalThree(b, a);

  const equalEachTwo = (pair1, pair2) =>
    (pair1 + pair2) * Math.abs(pair1 - pair2);
  if (a === b && c === d) return equalEachTwo(a, c);
  if (a === c && b === d) return equalEachTwo(a, b);
  if (a === d && b === c) return equalEachTwo(a, b);

  const equalTwo = (other1, other2) => other1 * other2;
  if (a === b) return equalTwo(c, d);
  if (a === c) return equalTwo(b, d);
  if (a === d) return equalTwo(b, c);
  if (b === c) return equalTwo(a, d);
  if (b === d) return equalTwo(a, c);
  if (c === d) return equalTwo(a, b);

  return Math.min(a, b, c, d);
}
console.log(solution(4, 1, 4, 4));
