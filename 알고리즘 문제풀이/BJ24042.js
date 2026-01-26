let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number)

// 인접, 간선 리스트
const graph = Array.from({ length: n }, () => [])
for(let i=0; i<m; i++) {
  const [start, end] = input[i+1].split(' ').map(Number)
  graph[start-1].push([end-1, i])
  graph[end-1].push([start - 1, i])
}

const INF = Infinity
const dist = Array(n).fill(INF)
dist[0] = 0

class MinHeap{
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item)
    this._up(this.heap.length - 1)
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._down(0)
    return top
  }

  _up(i) {
    while(i>0) {
      const p = Math.floor((i-1)/2)
      if (this.heap[p][0] < this.heap[i][0]) break
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
      i = p
    }
  }

  _down(i) {
    const n = this.heap.length
    while(true) {
      let s = i
      const left = i * 2 + 1
      const right = i * 2 + 2

      if (left < n && this.heap[left][0] < this.heap[s][0]) s = left
      if (right < n && this.heap[right][0] < this.heap[s][0]) s = right
      if (s === i) break

      [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]]

      i = s
    }
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

function solution() {
  const pq = new MinHeap()
  pq.push([0, 0]) //현재시간, 노드

  while(!pq.isEmpty()) {
    const [curTime, curNode] = pq.pop()
    let passTime
    let k

    if (curTime > dist[curNode]) continue

    for([nextNode, edgeIdx] of graph[curNode]) {
      if (curTime <= edgeIdx) {
        passTime = edgeIdx
      } else {
        k = Math.ceil((curTime - edgeIdx) / m)
        passTime = edgeIdx + k * m
      }

      const nextTime = passTime + 1

      if (nextTime < dist[nextNode]) {
        dist[nextNode] = nextTime
        pq.push([nextTime, nextNode])
      }
    }
  }
}

solution()

console.log(dist[n-1])
