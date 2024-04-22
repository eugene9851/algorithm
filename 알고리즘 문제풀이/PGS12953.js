//40min

//최대공약수 : 유클리드호제법
function gcd(a, b) {
  if(b === 0) return a
  else if(a % b === 0) return b
  else return gcd(b, a % b)
}

//최소공배수 : 두 수의 곱 / 최대공약수
function lcm(a, b) {
  return (a * b) / gcd(a, b)
}

function solution(arr) {
  arr.sort((a, b) => b - a) //내림차순 정렬(a>b)
  let answer = 1 //최소공배수의 누적
  for(let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i])
  }
  return answer
}

arr = [2, 6, 8, 14]
console.log(solution(arr))