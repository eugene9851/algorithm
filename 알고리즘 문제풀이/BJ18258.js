let input = require('fs').readFileSync('../example.txt').toString().split('\n');
const n = Number(input[0])
const commands = input.slice(1).map(v => v.split(' '))

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

    empty() {
        return this.size === 0 ? 1 : 0
    }

    push(item) {
        const newNode = new Node(item)

        if (this.empty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
    }

    pop() {
        if (this.empty()) return -1

        const removedValue = this.head.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }

        this.size--
        return removedValue
    }

    front() {
        if (this.empty()) return -1

        return this.head.value
    }

    back() {
        if (this.empty()) return -1

        return this.tail.value
    }
}

function solution(n, commands) {
    const deque = new Deque()
    const result = []

    for (let i = 0; i < n; i++) {
        console.log(deque)
        const [command, value] = commands[i]

        switch (command) {
            case 'push': deque.push(value)
                break
            case 'pop': result.push(deque.pop())
                break
            case 'size': result.push(deque.size)
                break
            case 'empty': result.push(deque.empty())
                break
            case 'front': result.push(deque.front())
                break
            case 'back': result.push(deque.back())
                break
            default: break
        }
    }

    return result
}

console.log(solution(n, commands).join('\n'))