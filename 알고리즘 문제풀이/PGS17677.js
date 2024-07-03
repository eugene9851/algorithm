//50min

function solution(str1, str2) {
  const reg = /^[a-z]{2}$/ //소문자만 포함하는 문자열인지 판단하는 정규식
  const lowerStr1 = str1.toLowerCase()
  const lowerStr2 = str2.toLowerCase()
  let array1 = []
  let array2 = []

  //두 문자씩 묶어서 배열에 넣기
  for(let i = 0; i < lowerStr1.length - 1; i++) {
    if(reg.test(lowerStr1[i] + lowerStr1[i + 1])) array1.push(lowerStr1[i] + lowerStr1[i + 1])
  }

  for(let j = 0; j < lowerStr2.length - 1; j++) {
    if(reg.test(lowerStr2[j] + lowerStr2[j + 1])) array2.push(lowerStr2[j] + lowerStr2[j + 1])
  }

  //모두 빈 배열이면 1*65536 리턴
  if(array1.length === 0 && array2.length === 0) return 65536

  let kyoCount = 0 //교집합의 개수
  for(let k = 0; k < array1.length; k++) {
    if(array2.indexOf(array1[k]) !== -1) { //array1를 순회하며 해당 원소가 array2에도 있다면
      array2[array2.indexOf(array1[k])] = undefined //undefined 처리, 교집합 개수 +1
      array1[k] = undefined
      kyoCount++
    }
  }

  //undefined가 아닌 원소의 개수(교집합이 아닌 원소의 개수)
  const rest1 = array1.filter((v) => v !== undefined).length
  const rest2 = array2.filter((v) => v !== undefined).length

  const jakad = kyoCount / (kyoCount + rest1 + rest2)

  return Math.floor(jakad * 65536)
}

str1 = "aa1+aa2"
str2 = "AAAA12"
console.log(solution(str1, str2))