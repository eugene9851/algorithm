function solution(record) {
  let userNicknames = {}
  //최종 닉네임 구하기
  record.forEach((description) => {
    const [inOrOut, id, name] = description.split(' ')
    if(inOrOut === "Enter" || inOrOut === "Change") userNicknames[id] = name
  })

  return record.reduce((acc, description) => {
    const [inOrOut, id] = description.split(' ')
    if(inOrOut === "Enter") {
      acc.push(`${userNicknames[id]}님이 들어왔습니다.`)
    } else if(inOrOut === "Leave") {
      acc.push(`${userNicknames[id]}님이 나갔습니다.`)
    }
    return acc
  }, [])
}

record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
console.log(solution(record))