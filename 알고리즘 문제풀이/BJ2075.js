const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
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
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      heapify(this.heap, this.heap.length, 0);
    }
    return min;
  }

  top() {
    return this.heap[0];
  }
}

function heapify(heap, n, i) {
  let smallest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  if (left < n && heap[left] < heap[smallest]) smallest = left;
  if (right < n && heap[right] < heap[smallest]) smallest = right;
  
  if (smallest !== i) {
    [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
    heapify(heap, n, smallest);
  }
}

const heap = new MinHeap();
let N = -1
let count = 0

rl.on('line', function(line) {
  if (N === -1) {
    N = parseInt(line)
    count = N
    return;
  }

  line.split(' ').forEach((value) => {
    const num = parseInt(value)
    if (heap.size() < N) {
      heap.push(num);
    } else if (num > heap.top()) {
      heap.pop();
      heap.push(num);
    }
  })
  count--

  if (count === 0) rl.close()
}).on('close', () => {
  console.log(heap.top())
  process.exit()
})
