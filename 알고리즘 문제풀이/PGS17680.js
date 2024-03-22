function solution(cacheSize, cities) {
  if(cacheSize === 0) return cities.length * 5 //캐시 크기가 0인 경우

  let time = 0
  const cache = new Map()

  cities.forEach((city) => {
    city = city.toLowerCase() //도시 이름을 소문자로 변환

    if(cache.has(city)) {
      time += 1 //cache hit
      cache.delete(city)
    } else {
      if(cache.size === cacheSize) {
        const oldest = cache.keys().next().value //가장 오래된 캐시 항목 찾기
        cache.delete(oldest)
      }
      time += 5 //cache miss
    }

    cache.set(city)
  })
  return time
}

cacheSize = 3
cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]

console.log(solution(cacheSize, cities))