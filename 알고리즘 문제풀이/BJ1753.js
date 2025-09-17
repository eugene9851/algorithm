let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [v, e] = input[0].split(' ').map(Number);
const start = Number(input[1]);
const graph = new Array(v + 1).fill(null).map(() => []);

for (let i = 2; i < e + 2; i++) {
    const [u, v, w] = input[i].split(' ').map(Number);
    graph[u].push({ node: v, weight: w });
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent].weight > this.heap[i].weight) {
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

    isEmpty() {
        return this.heap.length === 0;
    }
}

function heapify(heap, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && heap[left].weight < heap[smallest].weight) smallest = left;
    if (right < n && heap[right].weight < heap[smallest].weight) smallest = right;
    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        heapify(heap, n, smallest);
    }
}

function solution() {
    const distance = new Array(v + 1).fill(Infinity);
    const queue = new MinHeap();

    distance[start] = 0;
    queue.push({ node: start, weight: 0 });

    while (!queue.isEmpty()) {
        const { node, weight } = queue.pop();
        if (distance[node] < weight) continue;

        for (const { node: nextNode, weight: nextWeight } of graph[node]) {
            if (distance[nextNode] > distance[node] + nextWeight) {
                distance[nextNode] = distance[node] + nextWeight;
                queue.push({ node: nextNode, weight: distance[nextNode] });
            }
        }
    }
    return distance.slice(1).map((d) => (d === Infinity ? 'INF' : d));
}

console.log(solution().join('\n'));
