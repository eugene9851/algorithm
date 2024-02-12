//n의 값 구하기
//board[row, column]=='1'일 때 주변을 0->1로 만들어야 하는데..
//let nrow = [-1,0,1]
//let ncolumn = [-1,0,1]
//board[row, column]=='1'인 값 각각에 대해 board[row+nrow, column+ncolumn] =='1'
//board에서 '0'의 개수 리턴

// function solution(board) {
//   let count = 0
//   let n = board[0].length
//   for(let i=0; i<n; i++) {
//     for(let j=0; j<n; j++) {
//       if(board[i][j]==1) {
//         for(let x=-1; x<=1; x++) {
//           for(let y=-1; y<=1; y++) {
//             if((i+x)>=0&&(i+x)<n&&(j+y)>=0&&(j+y)<n)
//             board[i+x][j+y] = 1
//           }
//         }
//       }
//     }
//   }
//   for(let i=0; i<n; i++) {
//     for(let j=0; j<n; j++) {
//       if(board[i][j]==0) count++
//     }
//   }
//   return count
// }

// function solution(board) {
//   let count = 0
//   let n = board[0].length
//   let result = new Array(n).fill(new Array(n))
//   for(let i=0; i<n; i++) {
//     for(let j=0; j<n; j++) {
//       if(board[i][j]==1) {
//         for(let x=-1; x<=1; x++) {
//           for(let y=-1; y<=1; y++) {
//             if((i+x)>=0&&(i+x)<n&&(j+y)>=0&&(j+y)<n)
//             result[i+x][j+y] = 1
//           }
//         }
//       }
//     }
//   }
//   for(let i=0; i<n; i++) {
//     for(let j=0; j<n; j++) {
//       if(result[i][j]===1) count++
//     }
//   }
//   return count
// }

// function solution(board) {
//   let count = 1
//   let n = board[0].length
//   for(let i=0; i<n; i++) {
//     for(let j=0; j<n; j++) {
//       if(board[i][j] == 1) {
//         let aroundX = [-1,0,1]
//         let aroundY = [-1,0,1]
//         for(let k=0; k<3; k++) {
//           for(let t=0; t<3; t++) {
//             let nx = j + aroundX[k]
//             let ny = i + aroundY[t]
//             if(nx>=0 && nx<n && ny>=0 && ny<n) {
//               if(board[ny][nx] == 0) {
//                 board[ny][nx] = 1
//                 count++
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   return count
// }

// function solution(board) {
//   let n = board[0].length
//   let x = []
//   let y = []
//   for(let i=0; i<n; i++) {
//     for(let j=0; j<n; j++) {
//       if(board[i][j] == 1) {
//         x.push(j)
//         y.push(i)
//       }
//     }
//   }
//   let around = [[-1,-1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [-1, 1]]
//   let count = x.length
//   for(let i=0; i<x.length; i++) {
//     for(let j=0; j<8; j++) {
//       let nx = x[i] + around[j][0]
//       let ny = y[i] + around[j][1]
//       if(nx>=0 && nx<n && ny>=0 && ny<n) {
//         if(board[ny][nx] == 0) {
//           board[ny][nx] = 1
//           count++
//         }
//       }
//     }
//   }
//   return n*n - count
// }

//리팩토링1 : for, if문은 최대 3중까지 권장. 반복문 분리할 수 있으면 분리하기!
//리팩토링2 : 하나의 결과를 반환하는 로직은 새로운 함수를 만들어보는 것도 좋은 방법
//리팩토링3 : 안전지대 유형 푸는 법 두 가지
//          1) board에다가 위험지대 그려나가기
//          2) 새로운 board를 만들고 위험지대 그려나가기
//리팩토링4 : new Array *****

function solution(board) {
  let n = board.length
  let map = new Array(board.length).fill(null).map(() => new Array(board[0].length).fill(0));
  // let map = new Array(n).fill(new Array(n).fill(0))

  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      if(board[i][j]===1) danger(i,j,map)
    }
  }

  let count=0
  for(let array of map) {
    for(let value of array) {
      if(value===0) count++
    }
  }
  return count
}

const aroundX = [-1,-1,-1,0,0,0,1,1,1]
const aroundY = [-1,0,1,-1,0,1,-1,0,1]

function danger(x,y,checkBoard) {
  for(let i=0; i<9; i++) {
    let dangerX = x+aroundX[i]
    let dangerY = y+aroundY[i]

    if(dangerX>=0 && dangerX<checkBoard.length && dangerY>=0 && dangerY<checkBoard.length) checkBoard[dangerX][dangerY] = 1
  }
}

board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
console.log(solution(board))