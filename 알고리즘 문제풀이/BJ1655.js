let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const n = Number(input[0])
const numbers = new Array(n).fill(0).map((_, idx) => Number(input[idx+1]))

class MinHeap {
  constructor() {
    this.heap = []
  }

  push(value) {
    this.heap.push(value)
    this.up()
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.down()
    return top
  }

  peek() {
    return this.heap[0]
  }

  up() {
    let idx = this.heap.length - 1
    while(idx > 0) {
      let parent = Math.floor((idx-1)/2)
      if(this.heap[parent] <= this.heap[idx]) break
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
      idx = parent
    }
  }

  down() {
    let idx = 0
    const length = this.heap.length

    while(true) {
      let left = idx*2+1
      let right = idx*2+2
      let smallest = idx

      if (left < length && this.heap[left] < this.heap[smallest]) smallest = left
      if (right < length && this.heap[right] < this.heap[smallest]) smallest = right

      if (smallest === idx) break
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
      idx = smallest
    }
  }

  size() {
    return this.heap.length
  }
}

class MaxHeap {
  constructor() {
    this.heap = []
  }

  push(value) {
    this.heap.push(value)
    this.up()
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.down()
    return top
  }

  peek() {
    return this.heap[0]
  }

  up() {
    let idx = this.heap.length-1
    while(idx>0) {
      let parent = Math.floor((idx-1)/2)
      if (this.heap[parent] >= this.heap[idx]) break
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
      idx = parent
    }
  }

  down() {
    let idx = 0
    const length = this.heap.length

    while(true) {
      let left = idx*2+1
      let right = idx*2+2
      let largest = idx

      if(left < length && this.heap[left] > this.heap[largest]) largest = left
      if(right < length && this.heap[right] > this.heap[largest]) largest = right
      if(largest === idx) break
      [this.heap[largest], this.heap[idx]] = [this.heap[idx], this.heap[largest]]
      idx = largest
    }
  }

  size() {
    return this.heap.length
  }
}

function solution() {
  const maxHeap = new MaxHeap() //왼쪽 작은 값. 결국 중간값은 maxHeap의 가장 큰 값
  const minHeap = new MinHeap() //오른쪽 큰 값

  let result = []
  
  for(let i=0; i<n; i++) {
    const num = numbers[i]

    //처음에는 왼쪽에 넣기 혹은 maxHeap의 가장 큰 수가 더 크면 num은 왼쪽에 속해야 함
    if (maxHeap.size() === 0 || num <= maxHeap.peek()) maxHeap.push(num)
    else minHeap.push(num)

    //크기 균형 맞추기. max size = min size or max size = min size+1
    if (maxHeap.size() > minHeap.size()+1) minHeap.push(maxHeap.pop())
    else if (minHeap.size() > maxHeap.size()) maxHeap.push(minHeap.pop())

    result.push(maxHeap.peek())
  }

  return result.join('\n')
}

console.log(solution())
