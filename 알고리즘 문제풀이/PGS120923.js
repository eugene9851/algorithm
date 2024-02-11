function solution(num, total) {
  let sum = total%2===1 ? num*(num-1)/2 : (num-1)*(num-2)/2 + (num-1)

  const start = (total-sum)/num
  let answer = []
  for(let i=0; i<num; i++) {
    answer.push(start+i)
  }
  return answer
}

console.log(solution(5,5))