//25min

function solution(n, works) {
  //총 작업량이 n보다 작으면 0 return
  if(works.reduce((a, b) => a + b, 0) <= n) return 0

  const sortedWorks = works.sort((a, b) => b - a) //내림차순 정렬

  let currentN = n //현재 남은 야근시간

  while(currentN > 0) { //야근 시간이 남아있으면
    let currentWork = sortedWorks[0] //currentWork = 가장 큰 work

    for(let i = 0; i < sortedWorks.length; i++) {
      if(currentN > 0 && currentWork === sortedWorks[i]) {
        sortedWorks[i]--
        currentN--
        continue
      }
      else break
    }
  }

  return sortedWorks.reduce((prev, cur) => {
    prev += Math.pow(cur, 2)
    return prev
  }, 0)
}

console.log(solution(4, [4, 3, 3]))