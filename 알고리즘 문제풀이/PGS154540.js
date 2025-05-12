function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const arrayMap = new Array(row).fill(0).map(() => new Array(col).fill(0));
    const visited = new Array(row).fill(0).map(() => new Array(col).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            arrayMap[i][j] = maps[i][j];
        }
    }

    function countFood(visited, i, j) {
        if (i < 0 || i >= row || j < 0 || j >= col) return 0;
        if (visited[i][j] === 1) return 0;
        if (arrayMap[i][j] === 'X') return 0;

        let count = parseInt(arrayMap[i][j]);
        visited[i][j] = 1;

        count += countFood(visited, i + 1, j);
        count += countFood(visited, i - 1, j);
        count += countFood(visited, i, j + 1);
        count += countFood(visited, i, j - 1);
        return count;
    }

    const result = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const count = countFood(visited, i, j);
            if (count > 0) result.push(count);
        }
    }

    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}