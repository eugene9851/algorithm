let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);

const graph = new Array(n + 1).fill(null).map(() => []);

for (let i=2; i<m+2; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push({to: b, cost: c});
}

function solution() {
  const distance = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(Infinity));

  for (let i=1; i<=n; i++) {
    distance[i][i] = 0;
    for (const {to, cost} of graph[i]) {
      distance[i][to] = Math.min(distance[i][to], cost);
    }
  }

  for (let k=1; k<=n; k++) {
    for (let i=1; i<=n; i++) {
      for (let j=1; j<=n; j++) {
        distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j])
      }
    }
  }

  for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
      if (distance[i][j] === Infinity) {
        distance[i][j] = 0;
      }
    }
  }

  return distance.slice(1).map(row => row.slice(1).join(' ')).join('\n')
}

console.log(solution());
