let input = require('fs').readFileSync('../example.txt').toString().trim();

const [n, m] = input.split(' ').map(Number);

function backtracking(n, m, arr) {
    if (arr.length === m) {
        console.log(arr.join(' '));
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (arr.includes(i)) continue;
        arr.push(i);
        backtracking(n, m, arr);
        arr.pop();
    }
}

backtracking(n, m, []);
