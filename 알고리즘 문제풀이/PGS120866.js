//n의 값 구하기
//board[row, column]=='1'일 때 주변을 0->1로 만들어야 하는데..
//let nrow = [-1,0,1]
//let ncolumn = [-1,0,1]
//board[row, column]=='1'인 값 각각에 대해 board[row+nrow, column+ncolumn] =='1'
//board에서 '0'의 개수 리턴



board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]

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
console.log(solution(board))