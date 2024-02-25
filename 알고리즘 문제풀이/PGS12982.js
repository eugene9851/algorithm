function solution(d, budget) {
  const sortedArray = d.sort((a, b) => a - b);
  let totalCost = 0;

  // for (let i = 0; i < sortedArray.length; i++) {
  //   if (totalCost + sortedArray[i] <= budget) {
  //     totalCost += sortedArray[i];
  //   } else {
  //     return i;
  //   }
  // }
  // return sortedArray.length;

  //리팩토링1: for of문을 통해 early return

  let count = 0;

  for (const cost of sortedArray) {
    totalCost += cost;
    if (totalCost > budget) break;
    count++;
  }
  return count;
}

d = [1, 3, 2, 5, 4];
budget = 9;

console.log(solution(d, budget));
