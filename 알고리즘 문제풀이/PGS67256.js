const pad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]]

//숫자의 좌표 미리 계산
const coordinates = {}
pad.forEach((row, i) => {
  row.forEach((num, j) => coordinates[num] = [i, j])
})

//현재 좌표에서 다음 숫자까지의 거리 구하기
function findDistance(currentIndex, numberIndex) {
  return Math.abs(currentIndex[0] - numberIndex[0]) + Math.abs(currentIndex[1] - numberIndex[1])
}

function solution(numbers, hand) {
  let left = [3, 0] //왼손의 시작 지점
  let right = [3, 2] //오른손의 시작 지점
  let result = ""

  numbers.map((number) => {
    const numIndex = coordinates[number]

    //1,4,7이면 왼손
    if([1, 4, 7].includes(number)) {
      left = numIndex
      result += 'L'
    }
    //3,6,9이면 오른손
    if([3, 6, 9].includes(number)) {
      right = numIndex
      result += 'R'
    }
    //2,5,8,0이면 가까운 거리에 있는 손
    if([2, 5, 8, 0].includes(number)) {
      const leftDist = findDistance(left, numIndex)
      const rightDist = findDistance(right, numIndex)

      if(leftDist < rightDist || (rightDist === leftDist && hand === 'left')) {
        left = numIndex
        result += 'L'
      } else {
        right = numIndex
        result += 'R'
      }
    }
  })

  return result
}

numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
hand = 'left'
console.log(solution(numbers, hand))