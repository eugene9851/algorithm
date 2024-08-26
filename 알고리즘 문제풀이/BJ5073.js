//30min
//trim 꼭 넣기

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop()

for(let i = 0; i < input.length; i++) {
  const row = input[i].split(' ').map(Number).sort((a, b) => a - b)
  const [a, b, c] = row

  if(c >= a + b) {
    console.log('Invalid')
    continue
  }

  let set = new Set(row)
  if(set.size === 1) console.log('Equilateral')
  else if(set.size === 2) console.log('Isosceles')
  else console.log('Scalene')
}