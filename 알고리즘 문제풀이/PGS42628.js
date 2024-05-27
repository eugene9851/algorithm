//20min

function solution(operations) {
  let queue = []
  operations.forEach(operation => {
    if(operation.startsWith('I')) {
      queue.push(Number(operation.split('').slice(2).join('')))
    }
    else if(operation === 'D 1') {
      queue.splice(queue.indexOf(Math.max(...queue)), 1)
    }
    else if(operation === 'D -1') {
      queue.splice(queue.indexOf(Math.min(...queue)), 1)
    }
  })

  if(queue.length) {
    return [Math.max(...queue), Math.min(...queue)]
  } else return [0, 0]
}

operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]
console.log(solution(operations))