//30min

function solution(string) {
  let count = 0

  for(let i = 0; i < string.length; i++) {
    string[i] === "(" ? count++ : count--
    //count가 음수이면 )가 먼저 나온것이므로 early return
    if(count < 0) return false
  }

  return count ? false : true
}

s = "(())()"
console.log(solution(s))