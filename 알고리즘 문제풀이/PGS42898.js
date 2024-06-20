//1Hr

function solution(m, n, puddles) {
  const dp = new Array(n).fill(null).map(() => new Array(m).fill(0))

  //웅덩이는 -1
  puddles.forEach(puddle => {
    const [puddleX, puddleY] = puddle
    dp[puddleY - 1][puddleX - 1] = -1
  })

  dp[0][0] = 1

  for(let i = 0; i < n; i++) { //y좌표
    for(let j = 0; j < m; j++) { //x좌표
      //웅덩이면 0으로 바꾸기
      if(dp[i][j] === -1) {
        dp[i][j] = 0
        continue
      }

      if(i > 0) dp[i][j] += dp[i - 1][j] % 1000000007
      if(j > 0) dp[i][j] += dp[i][j - 1] % 1000000007
      dp[i][j] %= 1000000007
    }
  }

  return dp[n - 1][m - 1]
}

// function solution(m, n, puddles) {
//   const dp = new Array(n).fill(null).map(() => new Array(m).fill(0));

//   // Mark puddles in the dp array
//   puddles.forEach(puddle => {
//     const [puddleX, puddleY] = puddle;
//     dp[puddleY - 1][puddleX - 1] = -1; // Mark puddles with -1
//   });

//   dp[0][0] = 1; // Start point

//   for(let i = 0; i < n; i++) { // y coordinate
//     for(let j = 0; j < m; j++) { // x coordinate
//       if(dp[i][j] === -1) {
//         dp[i][j] = 0; // If it's a puddle, set ways to 0
//         continue;
//       }
//       if(i > 0) dp[i][j] += dp[i - 1][j] % 1000000007;
//       if(j > 0) dp[i][j] += dp[i][j - 1] % 1000000007;
//       dp[i][j] %= 1000000007;
//     }
//   }
//   return dp[n - 1][m - 1];
// }

console.log(solution(4, 3, [[2, 2]]))