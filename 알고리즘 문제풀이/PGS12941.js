//5min

function solution(A, B) {
  //하나는 오름차순, 하나는 내림차순으로 정렬해서 같은 index끼리 곱하기
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)

  return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0)
}

A = [1, 4, 2]
B = [5, 4, 4]
console.log(solution(A, B))