//25min

function solution(n) {
  const changed = n.toString(2)
  const numOfOne = changed.split('').filter((x) => x === "1").length //1의 개수

  while(true) {
    n++ //n보다 큰 수 중에 가장 작은 수
    if(n.toString(2).split('').filter((x) => x === "1").length === numOfOne) return n
  }
}

n = 78
console.log(solution(n))