//25min

let input = require('fs').readFileSync('../example.txt').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number)
const nations = input.splice(1).map((e) => e.split(' ').map(Number))

nations.sort((a, b) => {
  if(b[1] !== a[1]) return b[1] - a[1]
  else if(b[2] !== a[2]) return b[2] - a[2]
  else return b[3] - a[3]
})

let duplicate = 1

nations[0][4] = 1 //순위
for(let i = 1; i < n; i++) {
  if(nations[i - 1][1] === nations[i][1] && nations[i - 1][2] === nations[i][2] && nations[i - 1][3] === nations[i][3]) {
    duplicate++
    nations[i][4] = nations[i - 1][4] //중복이면 같은 순위
  } else {
    nations[i][4] = nations[i - 1][4] + duplicate
    duplicate = 1
  }
}

console.log(nations.find(e => e[0] === k)[4])