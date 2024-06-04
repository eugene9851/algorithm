//25min

//오름차순인지 확인하는 함수
function isAsc(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] <= arr[i + 1]) continue
    else return false
  }
  return true
}

function solution(skill, skill_trees) {
  let count = 0 //가능한 스킬트리 개수

  skill_trees.map((tree) => {
    //skill에 주어진 선행스킬의 인덱스번호 배열
    let skillIdx = []
    for(let i = 0; i < skill.length; i++) {
      skillIdx.push(tree.indexOf(skill[i]))
    }
    //skill의 뒷순서부터 skill tree에 포함되어있지 않으면(-1) 인덱스 빼기
    while(skillIdx[skillIdx.length - 1] === -1) skillIdx.pop()

    //skill의 앞순서가 포함되어있지 않으면(-1이 포함되어있으면) 제외
    //skillIdx 자체가 오름차순이면 가능한 스킬트리개수 +1
    if(!skillIdx.includes(-1) && isAsc(skillIdx)) count++
  })
  return count
}

skill = "CBD"
skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
console.log(solution(skill, skill_trees))