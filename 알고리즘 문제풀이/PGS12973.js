function solution(string) {
  let stringArray = string.split('')
  let sLength = stringArray.length

  let i = 0

  while(i < sLength - 1) {
    if(stringArray[i] === stringArray[i + 1]) {
      stringArray.splice(i, 2)
      i = Math.max(0, i - 2)
      sLength -= 2
    } else i++
  }

  return stringArray.length === 0 ? 1 : 0
}

string = "cdcd"
console.log(solution(string))