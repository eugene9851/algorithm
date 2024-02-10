function solution(dots) {
  const [dot1, dot2, dot3, dot4] = dots
  if((dot1[1]-dot2[1])/(dot1[0]-dot2[0]) === (dot3[1]-dot4[1])/(dot3[0]-dot4[0]) ||
  (dot1[1]-dot3[1])/(dot1[0]-dot3[0]) === (dot2[1]-dot4[1])/(dot2[0]-dot4[0]) ||
  (dot1[1]-dot4[1])/(dot1[0]-dot4[0]) === (dot3[1]-dot2[1])/(dot3[0]-dot2[0])) {
    return 1
  } else {
    return 0
  }
}
dots = [[3, 5], [4, 1], [2, 4], [5, 10]]
console.log(solution(dots))