//+53
const burger = [1, 2, 3, 1]
let count = 0

function solution(ingredient) {
  let i = 0
  while(ingredient.splice(i, 4) !== burger) {
    i++
  }
  if(ingredient.splice(i, 4) === burger) {
    count++
    ingredient.splice(i, 4)
    return solution(ingredient)
  }
  return count
}

// ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2]
ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
console.log(solution(ingredient))