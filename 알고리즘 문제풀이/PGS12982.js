function solution(d, budget) {
  const sortedArray = d.sort((a, b) => a - b);
  let totalCost = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    if (totalCost + sortedArray[i] <= budget) {
      totalCost += sortedArray[i];
    } else {
      return i;
    }
  }
  return sortedArray.length;
}

d = [1, 3, 2, 5, 4];
budget = 9;

console.log(solution(d, budget));
