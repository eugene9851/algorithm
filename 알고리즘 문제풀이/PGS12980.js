//10min

function solution(distance) {
  let count = 0
  while(distance > 1) {
    if(distance % 2 === 1) {
      distance = (distance - 1) / 2
      count++
    } else {
      distance = distance / 2
    }
  }
  return count + 1
}

distance = 5000
console.log(solution(distance))