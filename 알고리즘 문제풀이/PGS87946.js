//30min

function dfs(count, dungeons, k) {
  let max = count

  if(dungeons.length) {
    for(let i = 0; i < dungeons.length; i++) {
      let copyDungeons = [...dungeons]
      if(k >= copyDungeons[i][0]) {
        let newK = k - copyDungeons[i][1]
        let newCount = count + 1
        copyDungeons.splice(i, 1)
        max = Math.max(max, dfs(newCount, copyDungeons, newK))
      }
    }
  }
  return max
}

function solution(k, dungeons) {
  return dfs(0, dungeons, k)
}

k = 80
dungeons = [[80, 20], [50, 40], [30, 10]]
console.log(solution(k, dungeons))