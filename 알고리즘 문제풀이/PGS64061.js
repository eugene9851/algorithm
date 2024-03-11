//resultMap에서 연속으로 중복된 인형 있으면 count+1, 결과적으로 count 리턴
let count = 0
function popDolls(resultMap) {

  if(resultMap.length <= 1) return count
  if(resultMap.length === 2 && resultMap[0] !== resultMap[1]) return count

  let i = 0
  while(i < resultMap.length) {
    if(resultMap[i] === resultMap[i + 1]) {
      count++
      i += 2
      popDolls(resultMap.splice(i, 2))
      break
    }
    else i++
  }
  return count
}

function solution(board, moves) {
  //빈칸인 부분 지우기
  const newBoard = board.map((line) => {
    return line.filter((doll) => doll !== 0)
  })

  //뽑은 인형 moveMap에 넣기
  let moveMap = moves.map((move) => {
    return newBoard[move - 1].pop()
  })

  //뽑은 인형이 없을 때 undefined가 들어갔으므로 undefined 제거
  const resultMap = moveMap.filter((number) => number !== undefined)

  //count 1회 당 두 개의 인형이 사라지므로 2배로 리턴
  return popDolls(resultMap) * 2
}

board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
moves = [1, 5, 3, 5, 1, 2, 1, 4]

console.log(solution(board, moves))