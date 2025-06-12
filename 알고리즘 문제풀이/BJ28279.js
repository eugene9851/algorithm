let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(v => v.split(' ').map(Number));

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

    popFront() {
        if (this.isEmpty()) return -1;

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

    popBack() {
        if (this.isEmpty()) return -1

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

    front() {
        return this.isEmpty() ? -1 : this.head.value;
    }

    back() {
        if (this.isEmpty()) return -1;

        return this.tail.value
    }
}


function solution(n, commands) {
    const queue = new Deque()
    const result = []

    for (let command of commands) {
        switch (command[0]) {
            case 1:
                queue.pushFront(command[1])
                break
            case 2:
                queue.pushBack(command[1])
                break
            case 3:
                queue.isEmpty() ? result.push(-1) : result.push(queue.popFront())
                break
            case 4:
                queue.isEmpty() ? result.push(-1) : result.push(queue.popBack())
                break
            case 5:
                result.push(queue.size)
                break
            case 6:
                queue.size === 0 ? result.push(1) : result.push(0)
                break
            case 7:
                queue.isEmpty() ? result.push(-1) : result.push(queue.front())
                break
            case 8:
                queue.isEmpty() ? result.push(-1) : result.push(queue.back())
                break
        }
    }

    return result
}

console.log(solution(n, commands).join('\n'))