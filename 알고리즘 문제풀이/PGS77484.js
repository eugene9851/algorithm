//당첨 가능한 최고 수 = 겹치는 수 + 0의 개수
//당첨 가능한 최저 수 = 겹치는 수

//당첨 수(Key), 등수(value)
const lottoGrade = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
}

function solution(lottos, winNums) {
  //당첨 수의 개수
  // let count = 0

  // lottos.forEach((lottoNum) => {
  //   winNums.includes(lottoNum) && count++
  // })

  const count = lottos.filter((lotto) => winNums.includes(lotto) && lotto !== 0).length

  //0의 개수
  const zeroCount = lottos.filter((lotto) => lotto === 0).length

  const maxCount = count + zeroCount

  //등수 결정: 일치하는 번호의 개수가 등수 테이블에 없는 경우, 6등 반환
  const maxRank = lottoGrade[maxCount] || 6
  const minRank = lottoGrade[count] || 6

  return [maxRank, minRank]
}

lottos = [44, 1, 0, 0, 31, 25]
winNums = [31, 10, 45, 1, 6, 19]

console.log(solution(lottos, winNums))