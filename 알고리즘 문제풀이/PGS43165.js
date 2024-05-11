//30min

function solution(numbers, target) {
  let count = 0

  dfs(0, 0)

  function dfs(index, sum) {
    if(index === numbers.length) {
      if(sum === target) count++
      return
    }

    dfs(index + 1, sum + numbers[index])
    dfs(index + 1, sum - numbers[index])
  }

  return count
}

numbers = [1, 1, 1, 1, 1]
target = 3
console.log(solution(numbers, target))