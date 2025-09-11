let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

let testCase = Number(input[0]);
let i = 1;

while (testCase--) {
    const n = Number(input[i++]);
    const rank = input[i++].split(' ').map(Number);
    const m = Number(input[i++]);
    const graph = new Array(n + 1).fill(null).map(() => []);
    const indegree = new Array(n + 1).fill(0);

    for (let j = 0; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            graph[rank[j]].push(rank[k]);
            indegree[rank[k]]++;
        }
    }

    for (let j = 0; j < m; j++) {
        const [a, b] = input[i++].split(' ').map(Number);
        if (graph[a].includes(b)) {
            graph[a] = graph[a].filter(v => v !== b);
            indegree[b]--;
            graph[b].push(a);
            indegree[a]++;
        } else {
            graph[b] = graph[b].filter(v => v !== a);
            indegree[a]--;
            graph[a].push(b);
            indegree[b]++;
        }
    }

    console.log(solution(graph, indegree, n));
}

function solution(graph, indegree, n) {
    const queue = [];
    const result = [];
    let certain = true;

    for (let i = 1; i <= n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    for (let i = 0; i < n; i++) {
        if (queue.length === 0) {
            certain = false;
            break;
        }
        if (queue.length > 1) {
            certain = false;
        }

        const node = queue.shift();
        result.push(node);
        for (let i = 0; i < graph[node].length; i++) {
            const next = graph[node][i];
            indegree[next]--;
            if (indegree[next] === 0) queue.push(next);
        }
    }

    if (!certain && result.length < n) return 'IMPOSSIBLE';
    else if (!certain) return '?';
    else return result.join(' ');
}
