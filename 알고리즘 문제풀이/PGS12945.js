//35min

function solution(num) {
  let answer = 0
  let f1 = 0
  let f2 = 1

  for(let i = 2; i <= num; i++) {
    //그때그때 1234567의 나머지로 설정해줘야 함
    answer = (f1 + f2) % 1234567
    f1 = f2
    f2 = answer
  }
  return answer
}

num = 5
console.log(solution(num))