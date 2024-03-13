//파일 존재하는 좌표 구하고, 최소 x,y값 = lux, luy & 최대 x+1, y+1값 = rdx, rdy

function solution(wallpaper) {
  let minX = Infinity, minY = Infinity, maxX = -1, maxY = -1

  //파일 존재하는 좌표 배열
  for(let i = 0; i < wallpaper.length; i++) {
    for(let j = 0; j < wallpaper[i].length; j++) {
      if(wallpaper[i][j] === "#") {
        minX = Math.min(minX, i)
        minY = Math.min(minY, j)
        maxX = Math.max(maxX, i)
        maxY = Math.max(maxY, j)
      }
    }
  }

  return [minX, minY, maxX + 1, maxY + 1]
}

wallpaper = ["..........", ".....#....", "......##..", "...##.....", "....#....."]
console.log(solution(wallpaper))