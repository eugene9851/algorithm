//lines = [[a,b],[c,d],[e,f]]
//let answer = []
//let x = [a,c,e].sort()
//let y = [b,d,f].sort()
//x[1]<y[0] -> answer.push(x[1], y[1])
//else -> x[2]<y[1] -> answer.push(x[2],y[1])
//     -> else return 0


function solution(lines) {
  let answer = []
  let [[a,b],[c,d],[e,f]] = lines
  let x = [a,c,e].sort((a,b)=>a-b)
  let y = [b,d,f].sort((a,b)=>a-b)
  if(x[1]<y[0]) answer.push(x[1], y[1])
  else{
    if(x[2]<y[1]) answer.push(x[2], y[1])
    else answer = [0,0]
  }
  return answer[1]-answer[0]
}

lines = [[0, 5], [3, 9], [1, 10]]
console.log(solution(lines))