//1hr

function solution(people, limit) {
  let count = 0
  people.sort((a, b) => a - b) //오름차순 정렬

  while(people.length) {
    const heavy = people.pop() //무거운 사람
    //가장 무거운 사람+가장 가벼운 사람<=limit일 경우 가벼운 사람도 태우기
    if(heavy + people[0] <= limit) people.shift()

    count++
  }
  return count
}

people = [40, 80, 70, 60, 50, 50, 40]
limit = 100
console.log(solution(people, limit))