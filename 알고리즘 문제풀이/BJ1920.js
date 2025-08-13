let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const m = Number(input[2])

const arr1 = input[1].split(' ').map(Number)
const arr2 = input[3].split(' ').map(Number)

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return false;
}

function solution(arr1, arr2) {
    // const set = new Set(arr1);

    // for (let i = 0; i < m; i++) {
    //     if (set.has(arr2[i])) {
    //         console.log(1)
    //     } else {
    //         console.log(0)
    //     }
    // }

    arr1.sort((a, b) => a - b)

    for (let i = 0; i < m; i++) {
        if (binarySearch(arr1, arr2[i])) {
            console.log(1)
        } else {
            console.log(0)
        }
    }
}

solution(arr1, arr2)