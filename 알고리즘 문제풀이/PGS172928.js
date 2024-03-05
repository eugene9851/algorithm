//장애물이 있으면 true, 없으면 false
function isObstacle(op, n, start, obstacles, xWidth, yHeight) {
  switch(op) {
    case 'E':
      let obstaclesEMap = obstacles.map(([x, y]) => {
        if(start[0] === x && start[1] < y && start[1] + n >= y && start[1] + n >= xWidth) return true
        else return false
      })
      return (obstaclesEMap.includes("true"))
    case 'W':
      let obstaclesWMap = obstacles.map(([x, y]) => {
        if(start[0] === x && start[1] > y && start[1] - n <= y && start[1] - n < 0) return true
        else return false
      })
      return (obstaclesWMap.includes("true"))
    case 'S':
      let obstaclesSMap = obstacles.map(([x, y]) => {
        if(start[1] === y && start[0] < x && start[0] + n >= x && start[0] + n >= yHeight) return true
        else return false
      })
      return (obstaclesSMap.includes("true"))
    case 'N':
      let obstaclesNMap = obstacles.map(([x, y]) => {
        if(start[1] === y && start[0] > x && start[0] - n <= x && start[0] - n < 0) return true
        else return false
      })
      return (obstaclesNMap.includes("true"))
  }
}

function solution(park, routes) {
  //시작 위치, 장애물 위치
  let start
  let obstacles = []
  const xWidth = park.length
  const yHeight = park[0].length
  for(let i = 0; i < park.length; i++) {
    for(let j = 0; j < park[0].length; j++) {
      if(park[i][j] === "S") start = [i, j]
      if(park[i][j] === "X") obstacles.push([i, j])
    }
  }

  routes.forEach((route) => {
    let [op, n] = route.split(' ')
    //op, n은 문자열. n은 숫자형으로 변환
    numN = Number(n)

    //route까지의 길에 장애물이 없으면 이동
    if(!isObstacle(op, numN, start, obstacles, xWidth, yHeight)) {
      if(op === 'E') start[1] += n
      if(op === 'W') start[1] -= n
      if(op === 'S') start[0] += n
      if(op === 'N') start[0] -= n
    }
  })
  return start
}

park = ["SOO", "OXX", "OOO"]
routes = ["E 2", "S 2", "W 1"]

console.log(solution(park, routes))