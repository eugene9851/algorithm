//11.13~  +20
//health가 최대치일 때 최대치, 최대치가 아닐 때 그 값을 리턴하는 함수
function getHealth(health, initialHealth) {
  if(health >= initialHealth) health = initialHealth
  else health
  return health
}

function solution(bandage, initialHealth, attacks) {
  const lastAttack = attacks[attacks.length - 1][0] //마지막 공격 시간
  let attackIndex = 0 //attacks의 index 0부터 돌기
  let recoveryCount = 0 //연속 성공 횟수
  let health = initialHealth //초기 상태는 initialHealth(최대 체력)

  let time = 1

  //time이 마지막 공격 시간 이하이고 health가 0 초과일 때 유효
  while(time <= lastAttack && health > 0) {
    //time이 공격 시간과 일치하면 체력 감소, attackIndex 1 증가, 연속성공 초기화
    if(time === attacks[attackIndex][0]) {
      health -= attacks[attackIndex][1]
      attackIndex++
      recoveryCount = 0
    } else {
      //time이 공격 시간과 일치하지 않으면 연속 성공 1 증가
      recoveryCount++
      //증가된 연속성공이 시전 시간과 같다면 기존 health에 초당 회복량+추가 회복량 더하기(최대 initialHealth), 연속성공 초기화
      if(recoveryCount === bandage[0]) {
        health = getHealth((health + bandage[2] + bandage[1]), initialHealth)
        recoveryCount = 0
      } else {
        //증가된 연속성공이 시전 시간과 같지 않다면 기존 health에 초당 회복량만 더하기(최대 initialHealth)
        health = getHealth((health + bandage[1]), initialHealth)
      }
    }
    //time 1 증가
    time++
  }
  //health가 0 이하이면 early return, time이 lastAttack까지 도달하면 그 때의 health 리턴
  return health > 0 ? health : -1
}

bandage = [3, 2, 7]
health = 20
attacks = [[1, 15], [5, 16], [8, 6]]

console.log(solution(bandage, health, attacks))