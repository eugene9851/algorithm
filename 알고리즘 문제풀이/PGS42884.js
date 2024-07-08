//30min

function solution(routes) {
  let answer = 0 //설치할 단속카메라 개수

  routes.sort((a, b) => a[0] - b[0]) //진입지점 기준 오름차순 정렬

  let curOut = routes[0][1] //초기 진출지점은 첫번째 차의 진출 지점

  for(let i = 1; i < routes.length; i++) {
    //현재 진출지점이 다음 진입지점보다 작으면 카메라 1대 추가 설치 & 현재 진출지점 갱신
    if(curOut < routes[i][0]) {
      answer++
      curOut = routes[i][1]
    }
    //현재 진출지점이 다음 진출지점보다 크면 현재 진출지점 갱신
    if(curOut > routes[i][1]) {
      curOut = routes[i][1]
    }
  }

  return answer + 1
}

routes = [[-20, -15], [-14, -5], [-18, -13], [-5, -3]]
console.log(solution(routes))