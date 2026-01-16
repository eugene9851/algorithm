let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const info = input.slice(1).map(v => v.split(' ').slice(1))

info.sort((a, b) => {
  const len = Math.min(a.length, b.length)

  for(let i=0; i<len; i++) {
    if (a[i] !== b[i]) {
      return a[i].localeCompare(b[i])
    }
  }

  return a.length - b.length
})

const tree = {}
for(let i=0; i<n; i++) {
  const arr = info[i]
  let cur = tree
  
  for(const food of arr) {
    if (!cur[food]) cur[food] = {}
    cur = cur[food]
  }
}

function dfs(obj, depth) {
  const keys = Object.keys(obj).sort()

  for(const key of keys) {
    console.log('--'.repeat(depth) + key)
    dfs(obj[key], depth+1)
  }
}

dfs(tree, 0)