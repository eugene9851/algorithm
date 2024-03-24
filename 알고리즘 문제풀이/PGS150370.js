//날짜가 주어지면 총 일 수로 바꾸기
const getDays = (year, month, day) => {
  return day + month * 28 + year * 12 * 28
}

function solution(today, terms, privacies) {
  const todayDays = getDays(...today.split('.').map(Number)) //오늘 -> 일 수
  const dueDate = {}

  //type에 따른 유효 일 수
  terms.forEach(term => {
    const [type, dueMonth] = term.split(' ')
    dueDate[type] = dueMonth * 28
  })

  //개인정보 수집 날짜 + 유효기간 < 오늘 날짜 이면 리턴
  const resultMap = privacies.map((privacy, idx) => {
    const [privacyDate, privacyType] = privacy.split(' ')
    const privacyDays = getDays(...privacyDate.split('.').map(Number))
    const dueDays = privacyDays + dueDate[privacyType] - 1

    if(dueDays < todayDays) return idx + 1
  })
  return resultMap.filter((result) => result !== undefined)
}

today = "2022.05.19"
terms = ["A 6", "B 12", "C 3"]
privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]

console.log(solution(today, terms, privacies))