function solution(stageNum, stages) {
  const totalPlayers = stages.length //challengeNum의 초기값은 stage의 길이
  const stageCounts = Array(stageNum + 1).fill(0)

  //각 스테이지에 도전 중인 플레이어 수 계산
  stages.forEach((stage) => {
    if(stage <= stageNum) stageCounts[stage]++
  })

  let remainingPlayers = totalPlayers
  const failRates = []

  for(let i = 1; i <= stageNum; i++) {
    const failRate = remainingPlayers > 0 ? stageCounts[i] / remainingPlayers : 0
    failRates.push({ id: i, rate: failRate })
    remainingPlayers -= stageCounts[i] //다음 스테이지의 도전자 수 갱신
  }

  failRates.sort((a, b) => b.rate - a.rate) //실패율 내림차순

  return failRates.map((obj) => obj.id) //정렬된 실패율에 해당하는 스테이지 리턴
}

stageNum = 5
stages = [2, 1, 2, 6, 2, 4, 3, 3]
console.log(solution(stageNum, stages))