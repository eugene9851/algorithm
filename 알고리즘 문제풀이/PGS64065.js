function solution(string) {
  const tuples = string.slice(2, -2).split('},{') //앞뒤의 "{", "}" 제거

  //원소의 길이가 짧은 순서대로 재정렬
  const sortedTuples = tuples.map(tuple => tuple.split(',')).sort((a, b) => a.length - b.length)

  //result의 첫번째 값은 tupleArray의 첫 번째 값
  let result = []
  const seen = new Set()

  //중복 없이 순서대로 배열에 추가
  sortedTuples.forEach(tuple => {
    tuple.forEach(num => {
      if(!seen.has(num)) {
        seen.add(num)
        result.push(parseInt(num, 10))
      }
    })
  })
  return result
}

string = "{{1,2,3},{2,1},{1,2,4,3},{2}}"
console.log(solution(string))