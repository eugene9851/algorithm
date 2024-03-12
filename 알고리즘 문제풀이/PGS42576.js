function solution(participants, completion) {
  //두 배열을 알파벳순으로 정렬
  participants.sort()
  completion.sort()

  //같은 Index에서 요소의 값이 다르면 그 부분이 완주하지 못한 사람
  for(let i = 0; i < participants.length; i++) {
    if(participants[i] !== completion[i]) return participants[i]
  }
}

participants = ["mislav", "stanko", "mislav", "ana"]
completion = ["stanko", "ana", "mislav"]
console.log(solution(participants, completion))