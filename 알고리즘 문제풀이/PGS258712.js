function solution(friends, gifts) {
  const FRIENDS_NUM = friends.length

  //주고받은 선물 표
  let giveAndTakeMap = new Array(FRIENDS_NUM).fill(null).map(() => new Array(FRIENDS_NUM).fill(0))
  for(let i = 0; i < FRIENDS_NUM; i++) {
    gifts.forEach((giveTake) => {
      const [give, take] = giveTake.split(' ')
      if(give === friends[i]) {
        giveAndTakeMap[i][friends.indexOf(take)]++
      }
    })
  }

  //선물 지수 표
  let giftLevelMap = []
  for(let i = 0; i < FRIENDS_NUM; i++) {
    const giveCount = giveAndTakeMap[i].reduce((acc, cur) => acc + cur, 0) //준 선물 수

    //받은 선물 수
    let takeCount = 0
    for(let j = 0; j < FRIENDS_NUM; j++) {
      takeCount += giveAndTakeMap[j][i]
    }
    giftLevelMap[i] = giveCount - takeCount //선물 지수
  }

  let maxResult = 0 //다음 달 받을 선물 수

  for(let i = 0; i < FRIENDS_NUM; i++) {
    let getCount = 0
    for(let j = 0; j < FRIENDS_NUM; j++) {
      if(i === j) continue //준 사람과 받은 사람이 같으면 넘어감
      if(giveAndTakeMap[i][j] > giveAndTakeMap[j][i]) getCount++ //friends[i]가 준 선물 수가 더 크면 count++
      //서로 준 선물 수가 같으면 선물 지수가 큰 사람이 선물 받기
      else if(giveAndTakeMap[i][j] === giveAndTakeMap[j][i] && giftLevelMap[i] > giftLevelMap[j]) getCount++
    }
    //최대값을 리턴해야 하므로 friends[i]가 바뀔 때마다 갱신
    maxResult = Math.max(maxResult, getCount)
  }
  return maxResult
}

friends = ["muzi", "ryan", "frodo", "neo"]
gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]

console.log(solution(friends, gifts))