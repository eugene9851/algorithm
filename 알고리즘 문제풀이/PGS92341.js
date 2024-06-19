//45min

function solution(fees, records) {
  const [basicTime, basicFee, pieceTime, pieceFee] = fees
  const parking = {} //주차 정보(key: 차량 번호)

  records.forEach((record) => {
    const [time, carNum, inOrOut] = record.split(' ')
    const [hour, min] = time.split(':').map(Number)
    const minutes = hour * 60 + min //시간을 분으로 치환

    //등록되지 않은 차량이면 누적시간=0, 차량번호, inOrOut 정보 등록
    if(!parking[carNum]) parking[carNum] = { time: 0, carNum, inOrOut }

    //입고된 상태면 lastInTime 기록
    if(inOrOut === 'IN') {
      parking[carNum].inOrOut = 'IN'
      parking[carNum].lastInTime = minutes
      return
    }

    //출고면 있었던 시간 + 누적된 시간
    if(inOrOut === 'OUT') {
      parking[carNum].inOrOut = 'OUT'
      parking[carNum].time += minutes - parking[carNum].lastInTime
    }

  })

  return Object.values(parking).sort((a, b) => a.carNum - b.carNum).map((info) => { //차량번호 내림차순 정렬
    if(info.inOrOut === 'IN') info.time += 23 * 60 + 59 - info.lastInTime //최종 기록이 IN이면 23:59까지 주차되어있던 시간 계산
    if(info.time <= basicTime) return basicFee //기본시간보다 짧으면 기본요금 리턴
    return Math.ceil((info.time - basicTime) / pieceTime) * pieceFee + basicFee //기본시간보다 길면 계산해서 리턴
  })
}

fees = [180, 5000, 10, 600]
records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]
console.log(solution(fees, records))