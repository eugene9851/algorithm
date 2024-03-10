const pad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]]

//숫자의 좌표 구하기
function findIndex(number) {
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 3; j++) {
      if(pad[i][j] === number) return [i, j]
    }
  }
}

//현재 좌표에서 다음 숫자까지의 거리 구하기
function findDistance(currentIndex, numberIndex) {
  return Math.abs(currentIndex[0] - numberIndex[0]) + Math.abs(currentIndex[1] - numberIndex[1])
}

function solution(numbers, hand) {
  let left = [3, 0] //왼손의 시작 지점
  let right = [3, 2] //오른손의 시작 지점

  const result = numbers.map((number) => {
    //1,4,7이면 왼손
    if(number === 1 || number === 4 || number === 7) {
      left = findIndex(number)
      return 'L'
    }
    //3,6,9이면 오른손
    if(number === 3 || number === 6 || number === 9) {
      right = findIndex(number)
      return 'R'
    }
    //2,5,8,0이면 가까운 거리에 있는 손
    if(number === 2 || number === 5 || number === 8 || number === 0) {
      if(findDistance(right, findIndex(number)) > findDistance(left, findIndex(number))) {
        left = findIndex(number)
        return 'L'
      } else if(findDistance(right, findIndex(number)) < findDistance(left, findIndex(number))) {
        right = findIndex(number)
        return 'R'
      } else {
        //거리가 같으면 왼손잡이는 왼손, 오른손잡이는 오른손
        hand === 'left' ? left = findIndex(number) : right = findIndex(number)
        return hand[0].toUpperCase()
      }
    }
  })
  //배열인 result를 문자열로 변환
  return result.join('')
}

numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
hand = 'left'
console.log(solution(numbers, hand))