function solution(n, lost, reserve) {
  //여벌 있는 학생 = 도난당한 학생
  lost = lost.filter((lostStudent) => {
    const index = reserve.indexOf(lostStudent)
    if(index !== -1) {
      reserve.splice(index, 1) //여벌 목록에서 제거
      return false //도난 목록에서 제거
    }
    return true
  })

  lost.sort((a, b) => a - b)
  reserve.sort((a, b) => a - b)

  //체육복 빌려줄 수 있는 경우
  for(let i = 0; i < lost.length; i++) {
    const lostOne = lost[i]
    const prevIndex = reserve.indexOf(lostOne - 1)
    const nextIndex = reserve.indexOf(lostOne + 1)

    if(prevIndex !== -1) {
      reserve.splice(prevIndex, 1)
      lost[i] = null //목록에서 체육복 빌린 사람 제거
    } else if(nextIndex !== -1) {
      reserve.splice(nextIndex, 1)
      lost[i] = null
    }
  }

  const actualLost = lost.filter(lostStudent => lostStudent !== null)
  return n - actualLost.length
}

n = 5
lost = [2, 4]
reserve = [1, 3, 5]
console.log(solution(n, lost, reserve))