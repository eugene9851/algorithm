//30min

function dfs(node, computers, visited) {
  visited[node] = true //특정 노드 방문 처리

  for(let i = 0; i < computers.length; i++) { //그래프를 순회하며
    //특정 노드와 연결이 되어있고 아직 방문하지 않았다면 그 노드와 연결된 네트워크 찾기
    if(computers[node][i] === 1 && !visited[i]) dfs(i, computers, visited)
  }
}

function solution(n, computers) {
  let visited = new Array(n).fill(false) //노드 방문 여부
  let count = 0 //네트워크의 수

  for(let i = 0; i < n; i++) {
    if(!visited[i]) { //특정 노드를 방문하지 않았다면
      count++ //네트워크 +1
      dfs(i, computers, visited) //연결된 네트워크 찾기
    }
  }
  return count
}

n = 3
computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]]
console.log(solution(n, computers))