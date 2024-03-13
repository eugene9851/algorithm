function solution(park, routes) {
  const [startRow, startCol] = findStart(park)
  const [finalRow, finalCol] = move(startRow, startCol, routes, park)
  return [finalRow, finalCol]
}

//시작 좌표 구하기
function findStart(park) {
  for(let row = 0; row < park.length; row++) {
    const col = park[row].indexOf("S")
    if(col !== -1) return [row, col]
  }
}

function move(row, col, routes, park) {
  let currentRow = row
  let currentCol = col

  routes.forEach((route) => {
    const { nextRow, nextCol } = getNextPosition(currentRow, currentCol, route, park)
    if(nextRow !== null) {
      currentRow = nextRow
      currentCol = nextCol
    }
  })
  return [currentRow, currentCol]
}

function getNextPosition(row, col, route, park) {
  const [direction, steps] = route.split(" ")
  let tempRow = row
  let tempCol = col

  for(let i = 0; i < Number(steps); i++) {
    if(direction === "E") tempCol++
    if(direction === "W") tempCol--
    if(direction === "S") tempRow++
    if(direction === "N") tempRow--

    if(!isValid(tempRow, tempCol, park)) {
      return { nextRow: null, nextCol: null }
    }
  }
  return { nextRow: tempRow, nextCol: tempCol }
}

//범위 안에 있고, 장애물이 없으면 true return
function isValid(row, col, park) {
  return row >= 0 && col >= 0 && row < park.length && col < park[0].length && park[row][col] !== "X"
}

park = ["SOO", "OXX", "OOO"]
routes = ["E 2", "S 2", "W 1"]

console.log(solution(park, routes))