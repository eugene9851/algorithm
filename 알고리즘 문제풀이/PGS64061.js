function solution(board, moves) {
  let stack = []
  let count = 0

  moves.forEach((move) => {
    for(let i = 0; i < board.length; i++) {
      let doll = board[i][move - 1] //뽑은 인형
      if(doll !== 0) { //빈칸이 아니면
        if(stack[stack.length - 1] === doll) { //stack의 맨 위에 담긴 인형과 같으면 count+2, 인형 pop
          count += 2
          stack.pop()
        } else { //아니면 stack에 담기
          stack.push(doll)
        }
        board[i][move - 1] = 0
        break
      }
    }
  })
  return count
}

board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
moves = [1, 5, 3, 5, 1, 2, 1, 4]

console.log(solution(board, moves))