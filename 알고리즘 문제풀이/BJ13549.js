let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const graph = new Array(100001).fill(Infinity);

function solution(n, k) {
    const queue = [];
    queue.push(n);
    graph[n] = 0;

    while (queue.length) {
        const next = queue.shift();

        if (next === k) {
            return graph[next];
        }
        if (next + 1 <= 100000 && graph[next + 1] > graph[next] + 1) {
            graph[next + 1] = graph[next] + 1;
            queue.push(next + 1);
        }
        if (next - 1 >= 0 && graph[next - 1] > graph[next] + 1) {
            graph[next - 1] = graph[next] + 1;
            queue.push(next - 1);
        }
        if (next * 2 <= 100000 && graph[next * 2] > graph[next]) {
            graph[next * 2] = graph[next];
            queue.push(next * 2);
        }
    }
}

console.log(solution(n, k));
