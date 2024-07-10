//20min

function solution(dirs) {
  const move = {
    'U': [0, 1],
    'D': [0, -1],
    'R': [1, 0],
    'L': [-1, 0]
  }
  let set = new Set()
  let now = [0, 0] //현재 위치

  for(let dir of dirs) {
    const nowX = now[0] + move[dir][0] //이동한 X 
    const nowY = now[1] + move[dir][1] //이동한 Y

    //범위에서 벗어나면 다음으로 넘어감
    if(nowX < -5 || nowX > 5 || nowY < -5 || nowY > 5) continue

    //범위 안에 있으면 set에 추가(중복X)
    set.add(`${now[0]} ${now[1]} ${nowX} ${nowY}`)
    set.add(`${nowX} ${nowY} ${now[0]} ${now[1]}`)

    //now 갱신
    now = [nowX, nowY]
  }

  return set.size / 2
}

dirs = "LULLLLLLU"
console.log(solution(dirs))