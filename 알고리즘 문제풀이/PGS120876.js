//lines = [[a,b],[c,d],[e,f]]
//let answer = []
//let x = [a,c,e].sort()
//let y = [b,d,f].sort()
//x[1]<y[0] -> answer.push(x[1], y[1])
//else -> x[2]<y[1] -> answer.push(x[2],y[1])
//     -> else return 0

// function solution(lines) {
//   let answer = []
//   let [[a,b],[c,d],[e,f]] = lines
//   let x = [a,c,e].sort((a,b)=>a-b)
//   let y = [b,d,f].sort((a,b)=>a-b)
//   if(x[1]<y[0]) answer.push(x[1], y[1])
//   else{
//     if(x[2]<y[1]) answer.push(x[2], y[1])
//     else answer = [0,0]
//   }
//   return answer[1]-answer[0]
// }

//리팩토링1 : 겹치는 선분의 길이, 구간 유형에서는 객체 생성 후 하나의 구간에 대해 (x-1)/x로 네이밍하기
//리팩토링2 : new Map()은 get, set,values,keys,forEach(value,key,map) 등의 메소드 사용 가능

function solution(lines) {
  let map = new Map()
  let count = 0

  lines.forEach((line) => {
    for(let i=line[0]+1; i<=line[1]; i++) {
      let str = `${i-1}/${i}`
      map.set(str, ((map.get(str) || 0)+1))
    }
  })

  for(let value of map.values()) {
    if(value>1) count++
  }
  return count
}

lines = [[0, 5], [3, 9], [1, 10]]
console.log(solution(lines))