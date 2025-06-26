let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(Number);

function solution(n, arr) {
    const heap = []
    const result = []

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            if (heap.length === 0) result.push(0)
            else result.push(heapPop(heap))
        } else {
            heap.push(arr[i])
            let idx = heap.length - 1
            while (idx > 0) {
                const parent = Math.floor((idx - 1) / 2)
                if (Math.abs(heap[parent]) > Math.abs(heap[idx])) {
                    [heap[parent], heap[idx]] = [heap[idx], heap[parent]]
                    idx = parent
                } else if (Math.abs(heap[parent]) === Math.abs(heap[idx]) && heap[parent] > heap[idx]) {
                    [heap[parent], heap[idx]] = [heap[idx], heap[parent]]
                    idx = parent
                } else break
            }
        }
    }

    return result
}

function heapify(heap, n, i) {
    let smallest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < n) {
        if (Math.abs(heap[left]) < Math.abs(heap[smallest])) smallest = left
        if (Math.abs(heap[left]) === Math.abs(heap[smallest]) && heap[left] < heap[smallest]) smallest = left
    }
    if (right < n) {
        if (Math.abs(heap[right]) < Math.abs(heap[smallest])) smallest = right
        if (Math.abs(heap[right]) === Math.abs(heap[smallest]) && heap[right] < heap[smallest]) smallest = right
    }
    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]]
        heapify(heap, n, smallest)
    }
}

function heapPop(heap) {
    const min = heap[0]
    const last = heap.pop()
    if (heap.length > 0) {
        heap[0] = last
        heapify(heap, heap.length, 0)
    }
    return min
}

console.log(solution(n, arr).join('\n'))