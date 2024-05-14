//30min

function solution(word) {
  const alphabet = ['A', 'E', 'I', 'O', 'U']
  let count = 0
  let flag = false

  dfs('')

  function dfs(string) {
    if(string.length > 5 || flag) return

    if(string === word) {
      flag = true
      return
    }

    count++

    for(let i = 0; i < 5; i++) dfs(string + alphabet[i])
  }
  return count
}

console.log(solution("I"))