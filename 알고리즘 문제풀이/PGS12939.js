//2min

function solution(string) {
  const nums = string.split(' ')
  return `${Math.min(...nums)} ${Math.max(...nums)}`
}

string = "1 2 3 4"
console.log(solution(string))