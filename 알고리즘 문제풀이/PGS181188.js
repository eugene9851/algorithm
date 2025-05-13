function solution(targets) {
    const sortedTargets = targets.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let currentEnd = -1;
    for (const [start, end] of sortedTargets) {
        if (start >= currentEnd) {
            count++
            currentEnd = end;
        }
    }
    return count;
}