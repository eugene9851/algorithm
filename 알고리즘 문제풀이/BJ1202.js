let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number)
const jewels = input.slice(1, n + 1).map(v => v.split(' ').map(Number)).sort((a, b) => a[0] - b[0])
const bags = input.slice(n + 1).map(Number).sort((a, b) => a - b)

class MaxHeap {
    constructor() {
        this.heap = []
    }

    push(value) {
        this.heap.push(value)
        let i = this.heap.length - 1
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2)
            if (this.heap[parent] < this.heap[i]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
                i = parent
            } else break
        }
    }

    pop() {
        if (this.heap.length === 0) return null

        const max = this.heap[0]
        const last = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = last
            heapify(this.heap, this.heap.length, 0)
        }

        return max
    }
}

function solution(n, k, jewels, bags) {
    let sum = 0
    const heap = new MaxHeap()
    let idx = 0

    for (let i = 0; i < k; i++) {
        const capability = bags[i]

        while (idx < n && jewels[idx][0] <= capability) {
            heap.push(jewels[idx][1])
            idx++
        }

        const max = heap.pop()
        if (max !== null) sum += max
    }

    return sum
}

function heapify(heap, n, i) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < n && heap[left] > heap[largest]) largest = left
    if (right < n && heap[right] > heap[largest]) largest = right
    if (largest !== i) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]]
        heapify(heap, n, largest)
    }
}

console.log(solution(n, k, jewels, bags))