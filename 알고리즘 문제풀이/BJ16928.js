let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const ladders = input.slice(1, n + 1).map(v => v.split(' ').map(Number));
const snakes = input.slice(n + 1).map(v => v.split(' ').map(Number));

const board = new Array(101).fill(0);

for (let i = 1; i <= n; i++) {
    const [from, to] = input[i].split(' ').map(Number);
    board[from] = to;
}

for (let i = 1; i <= m; i++) {
    const [from, to] = input[i + n].split(' ').map(Number);
    board[from] = to;
}

const visited = new Array(101).fill(false);

function solution() {
    const queue = [];
    queue.push([1, 0]);
    visited[1] = true;
    let head = 0;

    while (queue.length > head) {
        const [current, count] = queue[head++];
        if (current === 100) return count;
        for (let i = 1; i <= 6; i++) {
            let next = current + i;
            if (next > 100) continue;
            if (board[next] !== 0) next = board[next];
            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, count + 1]);
            }
        }
    }
}

console.log(solution());
