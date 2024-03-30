function solution(string) {
  let totalZero = 0
  let count = 0

  function changeString(string) {
    if(string === "1") return //'1'이 되면 중단

    const zeroNum = string.split('').filter((str) => str === '0').length //'0'의 개수
    const filteredString = string.split('').filter((str) => str !== '0') //'0'제거
    const filteredLength = filteredString.length

    totalZero += zeroNum
    count++

    string = filteredLength.toString(2) //2진수로 변환
    return changeString(string)
  }
  changeString(string)
  return [count, totalZero]
}

string = "110010101001"
console.log(solution(string))