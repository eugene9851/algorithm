//resultMap에서 연속으로 중복된 인형 있으면 count+1, 결과적으로 count 리턴
let count = 0
function popDolls(array) {
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] === array[i + 1]) {
      count++
      array.splice(i, 2)
      return popDolls(array)
    }
  }
  return count
}

function solution(board, moves) {
  let stack = []
  //뽑은 인형 stack에 넣기
  moves.forEach((move) => {
    for(let i = 0; i < 5; i++) {
      if(board[i][move - 1] !== 0) {
        stack.push(board[i][move - 1])
        board[i][move - 1] = 0
        break
      }
    }
  })

  //count 1회 당 두 개의 인형이 사라지므로 2배로 리턴
  return popDolls(stack) * 2
}

board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
moves = [1, 5, 3, 5, 1, 2, 1, 4]

console.log(solution(board, moves))