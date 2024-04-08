//25min

function solution(string) {
  const wordArray = string.split(' ')
  const newArray = wordArray.map((word) => {
    if(word.length === 0) return "" //빈 문자열일 경우 pass
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  })
  return newArray.join(' ')
}

string = "3people unFollowed me"
console.log(solution(string))