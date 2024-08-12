//40min

let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const [totalCom, connectedNum] = input.slice(0, 2).map(Number)

function solution(totalCom, connectedNum) {
  let answer = 0 //정답
  //n번째에 연결되어있는 컴퓨터 번호 배열
  let graph = new Array(totalCom + 1).fill(null).map(() => [])
  let visited = new Array(totalCom + 1).fill(0)

  //양방향
  for(let i = 0; i < connectedNum; i++) {
    const start = Number(input[i + 2].split(' ')[0])
    const end = Number(input[i + 2].split(' ')[1])

    graph[start].push(end)
    graph[end].push(start)
  }

  function dfs(start) {
    for(let end of graph[start]) {
      if(visited[end] === 0) {
        answer++
        visited[end] = 1
        dfs(end)
      }
    }
  }

  visited[1] = 1 // 시작지점 1 방문처리
  dfs(1) //1에서 시작

  return answer
}

console.log(solution(totalCom, connectedNum))