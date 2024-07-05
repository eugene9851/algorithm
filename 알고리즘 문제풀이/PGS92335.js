//30min

function isPrime(number) {
  if(number <= 1) return false //1 이하면 소수 아님
  if(number === 2) return true //2는 소수임
  if(number % 2 === 0) return false //2의 배수는 소수 아님

  //다 배제 후 소수 판별
  for(let i = 3; i <= Math.sqrt(number); i += 2) {
    if(number % i === 0) return false
  }
  return true
}

function solution(n, k) {
  const changedNum = n.toString(k) //k진수로 변환
  //0이 없는 경우(P형태) 이면서 해당 숫자가 소수면 1 리턴
  if(changedNum.indexOf('0') === -1 && isPrime(Number(changedNum))) return 1

  let startIdx = 0 //0 기준 시작인덱스
  let result = 0 //소수의 개수
  for(let i = 0; i < changedNum.length; i++) {
    if(changedNum[i] === "0") { //0의 인덱스를 찾아서
      //이전까지의 숫자가 소수면 +1
      const slicedNum = changedNum.split('').slice(startIdx, i).join('')
      if(isPrime(Number(slicedNum))) {
        result++
      }
      startIdx = i + 1 //startIdx 갱신
    }
  }

  //마지막 부분도 소수면 +1 로직 실행
  const slicedNum = changedNum.split('').slice(startIdx).join('')
  if(isPrime(Number(slicedNum))) {
    result++
  }

  return result
}

console.log(solution(437674, 3))