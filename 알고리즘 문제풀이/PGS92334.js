function solution(idList, report, minCount) {
  const uniqueReports = new Set(report) //중복 제거된 신고 목록
  const reportsReceived = {} //각 사용자 별 신고 받은 횟수
  const reportsMade = {} //각 사용자 별 신고한 대상

  uniqueReports.forEach(report => {
    const [reporter, reported] = report.split(' ')

    //reportsReceived
    if(!reportsReceived[reported]) {
      reportsReceived[reported] = 0
    }
    reportsReceived[reported]++

    //reportsMade
    if(!reportsMade[reporter]) {
      reportsMade[reporter] = new Set()
    }
    reportsMade[reporter].add(reported)
  })

  const results = idList.map(userId => {
    const reportedUsers = reportsMade[userId] || []
    console.log(Array.from(reportedUsers))
    return Array.from(reportedUsers).reduce((count, user) => {
      return count + (reportsReceived[user] >= minCount ? 1 : 0)
    }, 0)
  })

  return results
}

idList = ["muzi", "frodo", "apeach", "neo"]
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
minCount = 2
console.log(solution(idList, report, minCount))