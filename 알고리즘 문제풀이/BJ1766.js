let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = new Array(n + 1).fill(null).map(() => []);
const indegree = new Array(n + 1).fill(0);

class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    push(value) {
        this.heap.push(value);
        let i = this.heap.length - 1
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] > this.heap[i]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            } else break;
        }
    }
    pop() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            heapify(this.heap, this.heap.length, 0);
        }
        return min;
    }
}

function heapify(heap, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && heap[left] < heap[smallest]) smallest = left;
    if (right < n && heap[right] < heap[smallest]) smallest = right;
    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        heapify(heap, n, smallest);
    }
}

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    indegree[b]++;
}

function solution() {
    const queue = new MinHeap();
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    while (queue.size()) {
        const node = queue.pop();
        result.push(node);
        for (let i = 0; i < graph[node].length; i++) {
            const next = graph[node][i];
            indegree[next]--;
            if (indegree[next] === 0) queue.push(next);
        }
    }

    return result.join(' ');
}

console.log(solution());