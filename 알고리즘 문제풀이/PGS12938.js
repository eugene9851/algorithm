//10min

function solution(n, s) {
  //최고의 집합이 존재하지 않는 경우 early return
  if(n > s) return [-1]

  let result = []

  //합이 가능한 집합 중 가장 마지막 집합이 원소의 곱이 최대
  while(n > 1) {
    result.push(Math.floor(s / n))
    s -= Math.floor(s / n)
    n--
  }
  result.push(s)

  return result
}
console.log(solution(3, 14))