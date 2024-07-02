//90min

function solution(m, n, board) {
  let currentBoard = board.map((v) => v.split(''))

  while(true) {
    let visited = new Array(m).fill(null).map(() => new Array(n).fill(false)) //터짐 여부
    let hasMatch = false //이번 턴에 터진게 한 개라도 있는지 여부

    //터질 조건이면 visited와 hasMatch true로 변경
    for(let i = 0; i < m - 1; i++) {
      for(let j = 0; j < n - 1; j++) {
        if(currentBoard[i][j] && currentBoard[i][j] === currentBoard[i][j + 1] && currentBoard[i][j] === currentBoard[i + 1][j + 1] && currentBoard[i][j] === currentBoard[i + 1][j]) {
          visited[i][j] = true
          visited[i][j + 1] = true
          visited[i + 1][j] = true
          visited[i + 1][j + 1] = true
          hasMatch = true
        }
      }
    }

    //한 번도 터지지 않았으면 while문 탈출
    if(!hasMatch) break

    //터진 부분은 ""로 변경
    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
        if(visited[i][j]) {
          currentBoard[i][j] = ""
        }
      }
    }

    //터진 부분 채우기
    for(let y = 0; y < n; y++) {
      let emptyRow = m - 1

      for(let x = m - 1; x >= 0; x--) {
        if(currentBoard[x][y]) {
          [currentBoard[x][y], currentBoard[emptyRow][y]] = [currentBoard[emptyRow][y], currentBoard[x][y]]
          emptyRow--
        }
      }
    }
  }

  //이중 배열 -> 단일 배열
  const allBlocks = currentBoard.reduce((acc, cur) => acc.concat(cur), [])
  return allBlocks.filter((v) => v === "").length
}

m = 6
n = 6
board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]
console.log(solution(m, n, board))