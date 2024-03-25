//9.46~

function solution(n, lost, reserve) {
  lost.forEach((lostStudent) => { //도난당한 각 학생에 대해서
    if(reserve.includes(lostStudent)) { //여벌 있는 학생 = 도난당한 학생
      delete lost[lost.indexOf(lostStudent)]
      delete reserve[reserve.indexOf(lostStudent)]
    } else if(reserve.includes(lostStudent - 1)) { //도난 당한 학생 - 1 = 여벌 있는 학생
      delete lost[lost.indexOf(lostStudent)]
      delete reserve[reserve.indexOf(lostStudent - 1)]
    } else if(reserve.includes(lostStudent + 1)) { //도난 당한 학생 + 1 = 여벌 있는 학생
      delete lost[lost.indexOf(lostStudent)]
      delete reserve[reserve.indexOf(lostStudent + 1)]
    }
  })
  const filteredLost = lost.filter((lostStudent) => lostStudent !== undefined)
  return n - filteredLost.length
}

n = 5
lost = [2, 4]
reserve = [1, 3, 5]
console.log(solution(n, lost, reserve))