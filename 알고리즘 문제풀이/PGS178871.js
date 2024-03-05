//이름이 불리면 players 순서 바꾸는 함수
// function changePlayers(name, players) {
//   const playerIndex = players.indexOf(name)
//   let temp = players[playerIndex - 1]
//   players[playerIndex - 1] = players[playerIndex]
//   players[playerIndex] = temp
// }


function solution(players, callings) {
  callings.forEach((name) => {
    //구조분해할당을 이용한 순서 변경 : error
    const playerIndex = players.indexOf(name)
    // let prevPlayer = players[playerIndex - 1]
    // let latePlayer = players[playerIndex]
    // [prevPlayer, latePlayer] = [latePlayer, prevPlayer]

    //순서 변경 : 시간 초과
    let temp = players[playerIndex - 1]
    players[playerIndex - 1] = players[playerIndex]
    players[playerIndex] = temp
  })
  return players
}

//object에 이름 불린 횟수 넣고 풀기 시도
// function solution(players, callings) {
//   let callingCountObj = {}
//   callings.forEach((name) => {
//     callingCountObj[name] = callingCountObj[name] ? callingCountObj[name] + 1 : 1
//   })
//   console.log(callingCountObj)
//   players.forEach((player, index) => {
//     index - callingCountObj[player]
//   })
// }

players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]

console.log(solution(players, callings))