function solution(coupon) {
  let count = 0
  while(coupon >= 10) {
    let chicken = Math.floor(coupon/10)
    count += chicken
    coupon = coupon%10 + chicken
  }
  return count
}


console.log(solution(1081))