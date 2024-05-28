//100min
//1. 플로이드-와샬: 모든 정점에서 모든 정점까지의 최단경로를 구하는 데에 특화됨
function solution1(n, start, arriveA, arriveB, fares) {
  //초기 거리를 무한대로 설정
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity))

  //자기 자신의 거리는 0
  for(let i = 1; i <= n; i++) {
    graph[i][i] = 0
  }

  //두 지점 간 거리 설정
  fares.forEach(([c, d, f]) => {
    graph[c][d] = f
    graph[d][c] = f
  })

  //플로이드-와샬 알고리즘: 각 지점의 최단거리 계산(업데이트)
  for(let k = 1; k <= n; k++) {
    for(let i = 1; i <= n; i++) {
      for(let j = 1; j <= n; j++) {
        if(graph[i][j] > graph[i][k] + graph[k][j]) graph[i][j] = graph[i][k] + graph[k][j]
      }
    }
  }

  let minFare = Infinity
  for(let i = 1; i <= n; i++) {
    minFare = Math.min(minFare, graph[start][i] + graph[i][arriveA] + graph[i][arriveB])
  }
  return minFare
}

//2. 다익스트라 알고리즘: n이 큰 경우 = 효율성이 떨어지는 경우
function dijkstra(start, graph, n) {
  //시작점을 큐에 넣음
  const queue = [start]
  //각 지점까지의 최단 거리를 무한대로 초기화
  const fares = Array(n + 1).fill(Infinity)
  //시작 지점의 거리는 0
  fares[start] = 0

  //큐에서 인접 지점 순회
  while(queue.length) {
    const x = queue.shift()
    //인접지점이 없으면 continue
    if(!graph[x]) continue
    //인접 지점을 거쳐 가는게 더 짧다면 갱신
    for(let [nextSpot, fare] of graph[x]) {
      if(fares[nextSpot] > fares[x] + fare) {
        fares[nextSpot] = fares[x] + fare
        queue.push(nextSpot) //큐에 인접 지점 넣음
      }
    }
  }
  return fares
}

function solution2(n, start, arriveA, arriveB, fares) {
  const graph = Array(n + 1).fill(null).map(() => [])

  for(let [c, d, f] of fares) {
    graph[c].push([d, f])
    graph[d].push([c, f])
  }

  //각 지점까지의 최단 배열 구하기
  const AB = dijkstra(start, graph, n) //start-i
  const A = dijkstra(arriveA, graph, n) //i-A
  const B = dijkstra(arriveB, graph, n) //i-B

  let minFare = Infinity
  for(let i = 1; i <= n; i++) {
    if(AB[i] !== Infinity && A[i] !== Infinity && B[i] !== Infinity) {
      minFare = Math.min(minFare, AB[i] + A[i] + B[i])
    }
  }
  return minFare
}

n = 6
start = 4
arriveA = 6
arriveB = 2
fares = [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]
console.log(solution2(n, start, arriveA, arriveB, fares))