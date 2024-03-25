//+53
let count = 0

function solution(ingredient) {
  if(ingredient.length < 4) return count

  let stringIngredient = ingredient.join('')

  for(let i = 0; i < stringIngredient.length - 3; i++) {
    if(stringIngredient.slice(i, i + 4) == "1231") {
      count++
      ingredient.splice(i, 4)
      return solution(ingredient)
    }
  }
  return count
}

ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2]
// ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
console.log(solution(ingredient))