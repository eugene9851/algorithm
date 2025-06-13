let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(BigInt);
const M = Number(input[3]);
const C = input[4].split(' ').map(BigInt);

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Deque {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    pushFront(x) {
        const newNode = new Node(x)

        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.size++
    }

    pushBack(x) {
        const newNode = new Node(x)

        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
    }

    popBack() {
        if (this.isEmpty()) return undefined

        const removedValue = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }

        this.size--
        return removedValue
    }
}

const deque = new Deque()
const result = []

for (let i = 0; i < N; i++) {
    if (A[i] === 0) deque.pushBack(B[i])
}

for (let i = 0; i < M; i++) {
    deque.pushFront(C[i])
    result.push(deque.popBack())
}

console.log(result.join(' '))