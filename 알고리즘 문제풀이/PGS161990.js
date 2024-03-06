//파일 존재하는 좌표 구하고, 최소 x,y값 = lux, luy & 최대 x+1, y+1값 = rdx, rdy

function solution(wallpaper) {
  //파일 존재하는 좌표 배열
  let paperMap = []
  for(let i = 0; i < wallpaper.length; i++) {
    for(let j = 0; j < wallpaper[0].length; j++) {
      if(wallpaper[i][j] === "#") {
        paperMap.push([i, j])
      }
    }
  }

  let paperMapOfX = []
  let paperMapOfY = []
  paperMap.forEach(([x, y]) => {
    paperMapOfX.push(x)
    paperMapOfY.push(y)
  })

  const lux = Math.min(...paperMapOfX)
  const luy = Math.min(...paperMapOfY)
  const rdx = Math.max(...paperMapOfX) + 1
  const rdy = Math.max(...paperMapOfY) + 1

  return [lux, luy, rdx, rdy]
}

wallpaper = ["..........", ".....#....", "......##..", "...##.....", "....#....."]
console.log(solution(wallpaper))