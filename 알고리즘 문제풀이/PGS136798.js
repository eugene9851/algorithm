//약수의 개수 구하는 함수
function Yaksoo(number) {
  let yaksooArray = [] //약수의 배열

  for(let i = 1; i <= number; i++) {
    if(number % i === 0) { //약수이면서
      if(number / i > i) { //아직 구하지 않은 약수이면 둘 다 push
        yaksooArray.push(i, number / i)
      } else if(number / i === i) { //제곱수이면 중복되므로 하나만 push
        yaksooArray.push(i)
      } else break //모두 아니면 이미 약수들을 구한 것이므로 break
    }
  }
  return yaksooArray.length
}

function solution(number, limit, power) {
  let weapons = [] //구매한 무기 공격력 배열

  //구매할 공격력이 limit보다 크면 power로 구매
  for(let i = 1; i <= number; i++) {
    const weapon = Yaksoo(i) <= limit ? Yaksoo(i) : power
    weapons.push(weapon)
  }

  //배열의 모든 수 더하기
  return weapons.reduce((acc, cur) => acc + cur, 0)
}

number = 5
limit = 3
power = 2
console.log(solution(number, limit, power))