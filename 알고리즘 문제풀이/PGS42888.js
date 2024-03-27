function solution(record) {
  let info = {}
  //최종 닉네임 구하기
  record.forEach((description) => {
    const [inOrOut, id, name] = description.split(' ')
    if(inOrOut === "Enter") info[id] = name
    if(inOrOut === "Change") info[id] = name
  })

  return record.map((description) => {
    const [inOrOut, id, name] = description.split(' ')
    if(inOrOut === "Enter") return `${info[id]}님이 들어왔습니다.`
    if(inOrOut === "Leave") return `${info[id]}님이 나갔습니다.`
  }).filter((alarm) => alarm !== undefined)
}

record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
console.log(solution(record))