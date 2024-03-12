function solution(players, callings) {
  //플레이어의 이름과 현재 인덱스를 매핑하는 객체 초기화
  //객체를 이용하여 시간초과 문제 해결
  let playerIndices = {}
  players.forEach((player, index) => {
    playerIndices[player] = index
  })

  callings.forEach((name) => {
    const index = playerIndices[name]
    if(index > 0) { //첫 번째 위치의 플레이어가 아니면
      const prevName = players[index - 1]
      players[index - 1] = name
      players[index] = prevName

      //플레이어 인덱스 매핑 업데이트
      playerIndices[name] = index - 1
      playerIndices[prevName] = index
    }
  })
  return players
}

players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]

console.log(solution(players, callings))

players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]

console.log(solution(players, callings))