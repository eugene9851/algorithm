//35min

function solution(want, number, discount) {
  let i = 0
  let count = 0
  let isRight = true
  const initialNumber = [...number]

  while(i <= discount.length - 10) {
    isRight = true //리셋
    let newNumber = [...initialNumber] //리셋

    for(let j = i; j < i + 10; j++) {
      const wantIdx = want.indexOf(discount[j])
      if(wantIdx === -1) { //want 품목이 할인 품목에 포함 안됨
        isRight = false
        break
      }
      else {
        newNumber[wantIdx]-- //포함되어서 number에서 1 뺐지만
        if(newNumber[wantIdx] < 0) { //음수가 되었을 때
          isRight = false
          break
        }
      }
    }
    i++
    isRight && count++
  }
  return count
}
want = ["banana", "apple", "rice", "pork", "pot"]
number = [3, 2, 2, 2, 1]
discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]

console.log(solution(want, number, discount))