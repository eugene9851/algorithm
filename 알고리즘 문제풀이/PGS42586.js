//17min

function solution(progresses, speeds) {
  let i = 0
  let result = []

  while(i < progresses.length) {
    let count = 1
    const day = Math.ceil((100 - progresses[i]) / speeds[i])

    while(day * speeds[i + 1] + progresses[i + 1] >= 100) {
      i++
      count++
    }
    result.push(count)
    i++
  }
  return result
}

progresses = [95, 90, 99, 99, 80, 99]
speeds = [1, 1, 1, 1, 1, 1]
console.log(solution(progresses, speeds))