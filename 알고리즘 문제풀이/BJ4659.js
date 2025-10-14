//30min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n')

const MOUM = new Set(['a', 'e', 'i', 'o', 'u'])
// const OTHERS = new Array(26).fill(0).map((_, i) => String.fromCharCode(i+97)).filter(alphabet => !MOUM.includes(alphabet))

function checkValidPassword(password) {
  let hasMoum = false

  for(let i=0; i<password.length; i++) {
    if (MOUM.has(password[i])) {
      hasMoum = true
      break
    }
  }
  if (!hasMoum) return false

  for(let i=0; i<password.length-2; i++) {
    if (MOUM.has(password[i]) && MOUM.has(password[i+1]) && MOUM.has(password[i+2])) {
      return false
    }
    if (!MOUM.has(password[i]) && !MOUM.has(password[i+1]) && !MOUM.has(password[i+2])) {
      return false
    }
  }

  for(let i=0; i<password.length-1; i++) {
    if (password[i] === password[i+1] && password[i] !== 'e' && password[i] !== 'o') {
      return false
    }
  }

  return true
}

function solution(input) {
  for(let i=0; i<input.length-1; i++) {
    const password = input[i]
    console.log(`<${password}> is ${checkValidPassword(password) ? 'acceptable.' : 'not acceptable.'}`)
  }
}

solution(input)
