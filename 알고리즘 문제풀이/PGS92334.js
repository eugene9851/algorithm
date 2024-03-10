function solution(idList, report, minCount) {
  //중복 신고는 1회로 처리, array로 다시 변경
  const reportSet = new Set(report)
  const reportArray = Array.from(reportSet)

  //이름 별 불린 횟수 객체로 모으기
  let reportedNameCount = {}
  reportArray.forEach((reportName) => {
    let reportedName = reportName.split(' ')[1]
    reportedNameCount[reportedName] ? reportedNameCount[reportedName] = reportedNameCount[reportedName] + 1 : reportedNameCount[reportedName] = 1
  })

  //불린 횟수가 minCount회 이상인 이름끼리 배열로 모으기
  let outNames = []
  idList.forEach((name) => {
    reportedNameCount[name] >= minCount && outNames.push(name)
  })

  //report array에서 정지된 아이디를 신고한 문자열만 남기기
  const reportOutArray = reportArray.filter((reportName) => {
    let reportedName = reportName.split(' ')[1]
    if(outNames.includes(reportedName)) {
      return reportedName
    }
  })

  //정지된 아이디를 신고한 유저들의 배열
  const userOutArray = reportOutArray.map((string) => {
    return string.split(' ')[0]
  })

  let answer = new Array(idList.length).fill(0)
  for(let i = 0; i < idList.length; i++) {
    userOutArray.forEach((userName) => {
      idList[i] === userName && answer[i]++
    })
  }
  return answer
}

idList = ["muzi", "frodo", "apeach", "neo"]
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
minCount = 2
console.log(solution(idList, report, minCount))