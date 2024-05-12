//50min

function solution(maps) {
  //상하좌우로 움직임
  const dx = [-1, 0, 1, 0]
  const dy = [0, -1, 0, 1]

  const n = maps.length
  const m = maps[0].length

  //방문 안했으면 0, 방문했으면 1 이상, 이동한 칸의 수
  let visited = new Array(n).fill(0).map(() => new Array(m).fill(0))

  bfs(0, 0) //0,0부터 시작

  function bfs(x, y) {
    let queue = []
    visited[x][y] = 1 //처음 자리는 1
    queue.push([x, y])

    while(queue.length) {
      let [cx, cy] = queue.shift() //시작 위치

      for(let i = 0; i < 4; i++) {
        //새로운 위치
        let nx = cx + dx[i]
        let ny = cy + dy[i]

        if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue //범위를 벗어날 경우
        if(visited[nx][ny] !== 0 || maps[nx][ny] === 0) continue //믹혀있거나 방문한 적이 있는 경우

        visited[nx][ny] = visited[cx][cy] + 1 //이동할 수 있으면 이전 visited 수(지금까지 이동한 수)+1
        queue.push([nx, ny]) //이동할 수 있는 좌표 queue에 넣기
      }
    }
  }
  //끝까지 다 했지만 마지막 좌표의 visited가 0이면 못가는 곳이므로 -1, 0이 아니면 그 수(이동한 칸 수) 리턴
  return visited[n - 1][m - 1] ? visited[n - 1][m - 1] : -1
}

maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]
console.log(solution(maps))