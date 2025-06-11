//20min

const [n, k] = require('fs').readFileSync('../example.txt').toString().trim().split(' ').map(Number);

class Queue {
    constructor() {
        this.items = []
        this.head = 0
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        if (this.items.length === this.head) return undefined

        const item = this.items[this.head]
        this.head++

        if (this.head > 1000) {
            this.items = this.items.slice(this.head)
            this.head = 0
        }

        return item
    }

    size() {
        return this.items.length - this.head
    }
}

function solution(n, k) {
    const queue = new Queue()

    for (let i = 1; i <= n; i++) {
        queue.enqueue(i)
    }

    const result = []

    while (queue.size() > 0) {
        for (let i = 0; i < k - 1; i++) {
            queue.enqueue(queue.dequeue())
        }

        result.push(queue.dequeue())
    }

    return result
}

console.log(`<${solution(n, k).join(', ')}>`)