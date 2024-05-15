//30min

function solution(n) {
  let answer = []

  function hanoi(n, from, to, by) {
    //1개면 to(3)로 이동
    if(n === 1) {
      answer.push([from, to])
      return
    }

    hanoi(n - 1, from, by, to) //일단 n-1개를 1->2
    answer.push([from, to]) //남은 1개 1->3
    hanoi(n - 1, by, to, from) //2에 있는 n-1 모두 2->3
  }
  hanoi(n, 1, 3, 2)

  return answer
}

console.log(solution(2))