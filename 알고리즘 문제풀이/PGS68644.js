function solution(numbers) {
  let resultSet = new Set()
  for(let i = 0; i < numbers.length - 1; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      resultSet.add(numbers[i] + numbers[j])
    }
  }
  return [...resultSet].sort((a, b) => a - b)
}

numbers = [2, 1, 3, 4, 1]

console.log(solution(numbers))