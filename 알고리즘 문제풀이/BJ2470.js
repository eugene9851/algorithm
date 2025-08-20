let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)

function solution(n, arr) {
    let left = 0
    let right = n - 1
    let min = Infinity
    let result = []

    while (left < right) {
        const sum = arr[left] + arr[right]

        if (sum === 0) {
            result = [arr[left], arr[right]]
            break
        } else if (sum < 0) {
            if (Math.abs(sum) < min) {
                min = Math.abs(sum)
                result = [arr[left], arr[right]]
            }
            left++
        } else {
            if (Math.abs(sum) < min) {
                min = Math.abs(sum)
                result = [arr[left], arr[right]]
            }
            right--
        }
    }

    return result.join(' ')
}

console.log(solution(n, arr))