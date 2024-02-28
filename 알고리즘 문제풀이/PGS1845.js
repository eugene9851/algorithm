function solution(nums) {
  //포켓몬 종류의 수
  const setNums = new Set(nums)

  //포켓몬 종류의 수가 포켓몬 수/2보다 작으면 포켓몬 종류의 수가 최댓값
  if(setNums.size <= nums.length / 2) return setNums.size
  //포켓몬 종류의 수가 포켓몬 수/2보다 크면 포켓몬 수/2가 가져갈 수 있는 최댓값
  else return nums.length / 2
}

nums = [3, 3, 3, 2, 2, 4]
console.log(solution(nums))