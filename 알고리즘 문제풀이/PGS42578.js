//15min

function solution(clothes) {
  let clothesObj = {}
  clothes.forEach(wear => {
    clothesObj[wear[1]] = clothesObj[wear[1]] ? clothesObj[wear[1]] + 1 : 1
  })

  let result = 1
  Object.values(clothesObj).forEach(value => result = (value + 1) * result)
  return result - 1
}

clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
console.log(solution(clothes))