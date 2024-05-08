//30min

function solution(priorities, location) {
  let targetIndex = location
  let result = 0 //실행된 프로세스의 개수

  while(true) {
    const max = Math.max(...priorities) //priorities의 max값 갱신
    if(targetIndex < 0) targetIndex = priorities.length - 1 //targetIndex가 0일 때 max가 아니면 맨 뒤로 이동

    if(priorities[0] === max) { //실행될 프로세스가 max일 때
      priorities.shift() //실행
      result++ //실행된 프로세스의 개수 +1
      if(targetIndex === 0) { //실행된게 마침 target이면
        return result //result 리턴
      } else targetIndex-- //아니면 -1
    }
    else { //실행될 프로세스가 max가 아니면
      const shiftPriority = priorities.shift() //실행되지 않고
      priorities.push(shiftPriority) //맨 뒤로 이동
      targetIndex-- //targetIndex는 -1
    }
  }
}

priorities = [2, 1, 3, 2]
location = 2

console.log(solution(priorities, location))