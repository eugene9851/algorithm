let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number)
const graph = new Array(n+1).fill(0).map(() => new Array())

for(let i=1; i<=m; i++) {
  const [start, end, cost] = input[i].split(' ').map(Number)
  graph[start].push([end, cost])
  graph[end].push([start, cost])
}

class MinHeap {
  constructor() {
    this.heap = []
    this.head = 0
  }

  push(item) {
    this.heap.push(item)
    let i = this.heap.length - 1
    while(i>0) {
      const parent = Math.floor((i-1)/2)
      if (this.heap[parent][0] > this.heap[i][0]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
        i = parent
      } else break
    }
  }

  pop() {
    if (this.heap.length === 0) return null
    const min = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = last
      heapify(this.heap, this.heap.length, 0)
    }
    return min
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

function heapify(heap, n, i) {
  let smallest = i
  const left = 2 * i + 1
  const right = 2 * i + 2

  if (left < n && heap[left][0] < heap[smallest][0]) smallest = left
  if (right < n && heap[right][0] < heap[smallest][0]) smallest = right
  if (smallest !== i) {
    [heap[i], heap[smallest]] = [heap[smallest], heap[i]]
    heapify(heap, n, smallest)
  }
}

const dist = new Array(n+1).fill(Infinity)

function solution() {
  const queue = new MinHeap()
  queue.push([0, 1])
  dist[1] = 0

  while(!queue.isEmpty()) {
    const [currentDist, current] = queue.pop()

    if (currentDist > dist[current]) continue

    for(const [next, cost] of graph[current]) {
      const newDist = currentDist + cost
      if (newDist < dist[next]) {
        dist[next] = newDist
        queue.push([newDist, next])
      }
    }
  }
}

solution()
console.log(dist[n])
