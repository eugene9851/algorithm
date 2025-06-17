let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map(Number)

function merge(left, right) {
    let pointer1 = 0
    let pointer2 = 0
    const result = []

    while (pointer1 <= left.length && pointer2 <= right.length) {
        if (pointer1 === left.length) {
            result.push(...right.slice(pointer2))
            break
        } else if (pointer2 === right.length) {
            result.push(...left.slice(pointer1))
            break
        }

        if (left[pointer1] >= right[pointer2]) {
            result.push(right[pointer2])
            pointer2++
        } else {
            result.push(left[pointer1])
            pointer1++
        }
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr).join('\n'))