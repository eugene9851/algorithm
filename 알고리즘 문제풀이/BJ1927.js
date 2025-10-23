let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const inputs = input.slice(1).map(Number)

class MinHeap {
    constructor() {
        this.heap = []
    }

    push(value) {
        this.heap.push(value)
        let i=this.heap.length-1
        while(i>0) {
            const parent = Math.floor((i-1)/2)

            if (this.heap[i] < this.heap[parent]) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
                i = parent
            } else break
        }
    }

    pop() {
        if (this.heap.length === 0) return 0
        
        const min = this.heap[0]
        const last = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = last
            heapify(this.heap, this.heap.length, 0)
        }

        return min
    }
}

function heapify(heap, n, i) {
    let smallest = i
    let left = i * 2 + 1
    let right = i * 2 + 2

    if (left < n && heap[smallest] > heap[left]) smallest = left
    if (right < n && heap[smallest] > heap[right]) smallest = right
    if (smallest !== i) {
        [heap[smallest], heap[i]] = [heap[i], heap[smallest]]
        heapify(heap, n, smallest)
    }
}

function solution(n, inputs) {
    let heap = new MinHeap()
    const result = []

    for(let i=0; i<n; i++) {
        if (inputs[i] === 0) {
            if (heap.length === 0) result.push(0)
            result.push(heap.pop())
        }

        else heap.push(inputs[i])
    }

    return result
}

console.log(solution(n, inputs).join('\n'))
