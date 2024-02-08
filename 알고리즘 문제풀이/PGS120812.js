//빈 Object 만들기
//array 각 원소를 돌면서 object 안에 원소가 key로 포함되어있으면 object[원소]+=1,
//포함 안되어있으면 object[원소]=1
//다 돌면 object의 value값들만, key값들만 따로 빈 배열에 넣기
//채워진 배열에서 가장 큰 값 고르기
//배열에 그 큰 값이 2개 이상 있으면 -1
//1개면 큰 값의 Index 찾아서 Key값 배열[Index]의 값 리턴

array = [1, 1, 2, 2, 2]

// function solution(array) {
//   let obj = {}
//   for(let i=0; i<array.length; i++) {
//     obj[array[i]] ? obj[array[i]]++ : obj[array[i]]=1
//   }
//   let arr = []
//   let keys = []
//   for(let key in obj) {
//     keys.push(key)
//     arr.push(obj[key])
//   }
//   let n = Math.max(...arr)
//   let cnt = 0
//   for(let i=0; i<arr.length; i++) {
//     if(arr[i]===n) cnt++
//     if(cnt==2) break
//   }
//   return cnt===1 ? Number(keys[arr.indexOf(n)]) : -1
// }

//리팩토링1: Object.values(obj) => obj의 value들만 뽑아 array로 반환
//리팩토링2: Object.keys(obj) => obj의 key들만 뽑아 array로 반환
//리팩토링3: for문 안에 cnt++ 대신 filter.length
//리팩토링4: reduce함수를 통해 map구현

function solution(array) {
  const frequencyMap = array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})

  const frequencyValues = Object.values(frequencyMap)
  const frequencyKeys = Object.keys(frequencyMap)
  const maxValue = Math.max(...frequencyValues)

  const maxValueCount = frequencyValues.filter((frequencyValue) => frequencyValue===maxValue).length

  return maxValueCount===1 ? Number(frequencyKeys[frequencyValues.indexOf(maxValue)]) : -1
}
console.log(solution(array))