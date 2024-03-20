function solution(string) {
  let stringArray = string.split('') //string 배열화
  stringArray.splice(0, 2) //앞의 "{", "{" 제거
  stringArray.splice(-2, 2) //뒤의 "}", "}" 제거
  //원소의 길이가 짧은 순서대로 재정렬
  const sortedArray = stringArray.join('').split('},{').sort((a, b) => a.length - b.length)
  //문자열 형태의 각 원소를 배열화
  const tupleArray = sortedArray.map((tuple) => tuple.split(','))

  //result의 첫번째 값은 tupleArray의 첫 번째 값
  let result = tupleArray[0]

  //tupleArray에서 이전 배열에 없는 원소를 result에 push
  for(let i = 1; i < tupleArray.length; i++) {
    tupleArray[i].forEach((element) => {
      if(!tupleArray[i - 1].includes(element)) result.push(element)
    })
  }
  return result.map(Number) //result의 원소들은 문자형이므로 숫자형으로 변환
}

string = "{{1,2,3},{2,1},{1,2,4,3},{2}}"
console.log(solution(string))