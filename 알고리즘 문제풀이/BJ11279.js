let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const arr = input.slice(1).map(Number)

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
                if (heap[parent] < heap[idx]) {
                    [heap[parent], heap[idx]] = [heap[idx], heap[parent]]
                    idx = parent
                } else break
            }
        }
    }

    return result
}

function heapify(arr, n, i) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < n && arr[left] > arr[largest]) largest = left
    if (right < n && arr[right] > arr[largest]) largest = right
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, n, largest)
    }
}

function heapPop(arr) {
    const max = arr[0]
    const last = arr.pop()
    if (arr.length > 0) {
        arr[0] = last
        heapify(arr, arr.length, 0)
    }
    return max
}

console.log(solution(n, arr).join('\n'))