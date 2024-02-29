//당첨 가능한 최고 수 = 겹치는 수 + 0의 개수
//당첨 가능한 최저 수 = 겹치는 수

//당첨 수(Key), 등수(value)
const lottoGrade = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
  1: 6,
  0: 6
}

function solution(lottos, winNums) {
  //당첨 수의 개수
  let count = 0

  lottos.forEach((lottoNum) => {
    winNums.includes(lottoNum) && count++
  })

  //0의 개수
  const zeroCount = lottos.filter((lotto) => lotto === 0).length

  const maxCount = count + zeroCount
  return [lottoGrade[maxCount], lottoGrade[count]]
}

lottos = [44, 1, 0, 0, 31, 25]
winNums = [31, 10, 45, 1, 6, 19]

console.log(solution(lottos, winNums))