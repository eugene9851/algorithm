let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const gateNum = Number(input[0]);
const planesNum = Number(input[1]);
const planes = input.slice(2).map(Number);

function solution(gateNum, planesNum, planes) {
    const gates = Array.from({ length: gateNum + 1 }, (_, i) => i);
    let count = 0;

    const find = (x) => {
        if (gates[x] === x) return x;
        return (gates[x] = find(gates[x]));
    };

    function union(a, b) {
        gates[find(a)] = find(b);
    }

    for (let i = 0; i < planesNum; i++) {
        let num = find(planes[i]);
        if (num === 0) break;
        count++;
        union(num, num - 1);
    }

    return count;
}

console.log(solution(gateNum, planesNum, planes));
