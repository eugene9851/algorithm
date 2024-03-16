function solution(participants, completion) {
  const participantCount = new Map()

  //참가자의 이름과 출현 횟수 매핑
  participants.forEach((name) => {
    if(!participantCount.has(name)) participantCount.set(name, 1)
    else participantCount.set(name, participantCount.get(name) + 1)
  })

  console.log(participantCount)

  //완주한 선수들의 이름에 따라 카운트 감소
  completion.forEach((name) => {
    if(participantCount.has(name)) participantCount.set(name, participantCount.get(name) - 1)
  })

  //완주하지 못한 선수 찾기
  for(let [name, count] of participantCount) {
    if(count > 0) return name
  }
}

participants = ["mislav", "stanko", "mislav", "ana"]
completion = ["stanko", "ana", "mislav"]
console.log(solution(participants, completion))