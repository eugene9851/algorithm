let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])

function getPrime(n) {
    const primes = []

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    return primes
}

function isPrime(n) {
    if (n <= 1) return false

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}

const primes = getPrime(n)

function solution(n, primes) {
    let left = 0
    let right = 0
    let sum = 0
    let count = 0

    while (true) {
        if (sum === n) {
            count++
            sum -= primes[left]
            left++
        } else if (sum < n) {
            if (right === primes.length) {
                break
            }
            sum += primes[right]
            right++
        } else {
            sum -= primes[left]
            left++
        }
    }

    return count
}

console.log(solution(n, primes))