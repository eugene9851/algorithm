//1hr

function solution(n) {
  let result = new Array(n).fill(0).map((_, idx) => new Array(idx + 1).fill(0))
  let row = -1
  let col = 0
  let num = 0
  let answer = []

  while(n > 0) {
    for(let i = 0; i < n; i++) result[++row][col] = ++num
    for(let i = 0; i < n - 1; i++) result[row][++col] = ++num
    for(let i = 0; i < n - 2; i++) result[--row][--col] = ++num

    n -= 3
  }

  for(let i = 0; i < result.length; i++) {
    for(let j = 0; j < result[i].length; j++) {
      if(result[i][j]) answer.push(result[i][j])
    }
  }
  return answer
}

console.log(solution(5))