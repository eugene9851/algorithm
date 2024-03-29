function solution(ingredient) {
  let count = 0
  let i = 0

  while(i <= ingredient.length - 4) {
    if(ingredient[i] === 1 && ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
      ingredient.splice(i, 4) //해당 부분 제거
      count++
      i = Math.max(i - 4, 0) //제거했다면 이전 위치에서 검색 continue
    } else {
      i++ //제거하지 못했다면 다음으로 continue
    }
  }
  return count
}

// ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2]
ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
console.log(solution(ingredient))