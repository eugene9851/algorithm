//주고받은 선물 표
function calculateGiftsBetweenFriends(friends, gifts, friendsCount) {
  let giftsGivenAndReceived = Array.from({ length: friendsCount }, () => new Array(friendsCount).fill(0))

  gifts.forEach(gift => {
    const [giver, receiver] = gift.split(' ')
    const giverIndex = friends.indexOf(giver)
    const receiverIndex = friends.indexOf(receiver)
    giftsGivenAndReceived[giverIndex][receiverIndex]++
  })
  return giftsGivenAndReceived
}

//선물 지수 표
function calculateGiftBalance(giftsGivenAndReceived) {
  return giftsGivenAndReceived.map((giftsGiven, index) => {
    const giftsReceived = giftsGivenAndReceived.reduce((total, _, idx) => {
      return total + giftsGivenAndReceived[idx][index]
    }, 0)
    return giftsGiven.reduce((total, current) => total + current, 0) - giftsReceived
  })
}

function calculateMaxGiftsExpected(giftsGivenAndReceived, giftBalance) {
  return Math.max(...giftBalance.map((_, index) => {
    return giftsGivenAndReceived[index].reduce((count, giftsGiven, idx) => {
      if(giftsGiven > giftsGivenAndReceived[idx][index] ||
        (giftsGiven === giftsGivenAndReceived[idx][index] && giftBalance[index] > giftBalance[idx])) count++
      return count
    }, 0)
  }))
}

function solution(friends, gifts) {
  const friendsCount = friends.length
  const giftsGivenAndReceived = calculateGiftsBetweenFriends(friends, gifts, friendsCount)
  const giftBalance = calculateGiftBalance(giftsGivenAndReceived)
  return calculateMaxGiftsExpected(giftsGivenAndReceived, giftBalance)
}

friends = ["muzi", "ryan", "frodo", "neo"]
gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]

console.log(solution(friends, gifts))