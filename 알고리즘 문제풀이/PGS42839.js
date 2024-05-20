//30min

//소수인지 구하는 함수
function isPrime(number) {
  if(number < 2) return false
  for(let i = 2; i < number; i++) {
    if(number % i === 0) return false
  }
  return true
}

//깊이우선탐색을 통해 가능한 숫자 조합 구하기
function dfs(array, set, fixed) {
  if(array.length) {
    for(let i = 0; i < array.length; i++) {
      let newFixed = fixed + array[i]
      let copyArr = [...array]

      isPrime(newFixed) && set.add(Number(newFixed))
      copyArr.splice(i, 1)

      dfs(copyArr, set, newFixed)
    }
  }
}

function solution(numbers) {
  const numbersArray = numbers.split('')

  let set = new Set()
  dfs(numbersArray, set, "")
  return set.size
}

console.log(solution('17'))