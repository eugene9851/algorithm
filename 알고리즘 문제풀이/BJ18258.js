let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0])
const commands = input.slice(1).map(v => v.split(' '))

class Queue {
    constructor() {
        this.items = []
        this.head = 0
    }

    empty() {
        return this.items.length === this.head ? 1 : 0
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        if (this.empty() === 1) return -1

        const item = this.items[this.head]
        this.head++

        if (this.head > 100) {
            this.items = this.items.slice(this.head)
            this.head = 0
        }
        return item
    }

    size() {
        return this.items.length - this.head
    }

    front() {
        if (this.empty() === 1) return -1

        return this.items[this.head]
    }

    back() {
        if (this.empty() === 1) return -1

        return this.items[this.items.length - 1]
    }
}

function solution(n, commands) {
    const queue = new Queue()
    const result = []

    for (let i = 0; i < n; i++) {
        const [command, value] = commands[i]

        switch (command) {
            case 'push': queue.push(value)
                break
            case 'pop': result.push(queue.pop())
                break
            case 'size': result.push(queue.size())
                break
            case 'empty': result.push(queue.empty())
                break
            case 'front': result.push(queue.front())
                break
            case 'back': result.push(queue.back())
                break
            default: break
        }
    }

    return result
}

console.log(solution(n, commands).join('\n'))