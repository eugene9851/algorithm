//50min

function solution(n, left, right) {
  let answer = []

  //현재 행&열 중 최대값+1
  for(let i = left; i <= right; i++) {
    const currentRow = Math.floor(i / n)
    const currentCol = i % n
    answer.push(Math.max(currentCol, currentRow) + 1)
  }
  return answer
}

console.log(solution(3, 2, 5))