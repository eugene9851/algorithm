//윤년: 2/29 존재
//index개월에 해당하는 일 수
const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//1/1 "FRI"
const dayArray = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

function solution(month, day) {
  //총 일수로 변환
  let totalDays = 0
  for(let i = 1; i < month; i++) {
    totalDays += monthDays[i]
  }
  totalDays += day

  return dayArray[totalDays % 7]
}

month = 5
day = 24
console.log(solution(month, day))