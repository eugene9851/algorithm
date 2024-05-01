//30min

function solution(elements) {
  let result = [...elements]

  let k = 1
  while(k < elements.length) {
    for(let i = 0; i < elements.length; i++) {
      let sum = 0
      for(let j = 0; j <= k; j++) {
        let index = i + j
        if(index >= elements.length) index -= elements.length
        sum += elements[index]
      }
      result.push(sum)
    }
    k++
  }
  const resultSet = new Set(result)
  return resultSet.size
}
console.log(solution([7, 9, 1, 1, 4]))