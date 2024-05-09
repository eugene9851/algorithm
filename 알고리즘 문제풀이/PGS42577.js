//18min

function solution(phone_book) {
  phone_book.sort()

  for(let i = 0; i < phone_book.length - 1; i++) {
    if(phone_book[i + 1].startsWith(phone_book[i])) return false //옆에만 비교하면 됨
  }
  return true
}

phone_book = ["123", "456", "789"]
console.log(solution(phone_book))