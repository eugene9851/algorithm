//약수의 개수 구하는 함수
function Yaksoo(number) {
  let count = 0

  for(let i = 1; i * i <= number; i++) {
    if(number % i === 0) {
      if(number % i === 0) {
        count += (number / i === i) ? 1 : 2
      }
    }
  }
  return count
}

function solution(number, limit, power) {
  let weapons = 0

  //구매할 공격력이 limit보다 크면 power로 구매
  for(let i = 1; i <= number; i++) {
    const yaksooCount = Yaksoo(i)
    const weapon = yaksooCount <= limit ? yaksooCount : power
    weapons += weapon
  }

  return weapons
}

number = 5
limit = 3
power = 2
console.log(solution(number, limit, power))