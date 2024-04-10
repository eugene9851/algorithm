//12.33

function solution(brown, yellow) {
  for(let i = 1; i <= yellow; i++) {
    for(let j = 1; j <= yellow; j++) {
      if(i >= j && i * j === yellow && (i + 2) * (j + 2) === brown + yellow) return [i + 2, j + 2]
    }
  }
}

brown = 8
yellow = 1
console.log(solution(brown, yellow))