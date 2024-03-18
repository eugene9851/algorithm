function solution(stageNum, stages) {
  let challengeNum = stages.length //challengeNum의 초기값은 stage의 길이
  let failPercentage = []

  for(let i = 1; i <= stageNum; i++) {
    const failNum = stages.filter((stage) => stage === i).length //스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
    failPercentage.push({ id: i, fail: (failNum / challengeNum) }) //{id: 스테이지, fail: 실패율}
    challengeNum -= failNum
  }

  failPercentage.sort((a, b) => b.fail - a.fail) //실패율 내림차순

  return failPercentage.map((obj) => obj.id) //정렬된 실패율에 해당하는 스테이지 리턴
}

stageNum = 5
stages = [2, 1, 2, 6, 2, 4, 3, 3]
console.log(solution(stageNum, stages))