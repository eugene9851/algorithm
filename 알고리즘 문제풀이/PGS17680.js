function solution(cacheSize, cities) {
  //대소문자 구분 안하므로 도시 전부 소문자로 바꾸기
  const lowerCities = cities.map((city) => city.toLowerCase())

  let cache = [] //캐시
  let time = 0 //실행시간

  lowerCities.forEach((city) => {
    if(cache.length < cacheSize) { //초반에는 cache miss 처리
      cache.push(city)
      time += 5
    } else if(cache.includes(city)) { //cache hit일 경우
      if(cache[cacheSize - 1] === city) time++ //현재 city가 직전 city와 동일하면 time+1
      else { //직전과 동일하지 않으면 위치 바꾸고 time+1
        let temp = cache[cache.indexOf(city)]
        cache[cache.indexOf(city)] = cache[cacheSize - 1]
        cache[cacheSize - 1] = temp
        time++
      }
    } else { //cache miss일 경우
      cache.shift()
      cache.push(city)
      time += 5
    }
  })
  return time
}

cacheSize = 3
cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]

console.log(solution(cacheSize, cities))