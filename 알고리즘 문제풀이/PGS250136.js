function solution(land) {
    // const row = land.length
    // const col = land[0].length

    // const visited = new Array(row).fill(0).map(() => new Array(col).fill(0))
    // //각 열에 있는 석유 덩어리의 크기가 저장될 배열
    // const columnOil = new Array(col).fill(0)

    // //석유 덩어리의 크기 계산
    // function dfs(i, j, oilColumns) {
    //     if (i < 0 || j < 0 || i >= row || j >= col || visited[i][j] || land[i][j] === 0) return 0;

    //     visited[i][j] = 1;

    //     //현재 석유가 걸쳐있는 열을 기록
    //     oilColumns.add(j)

    //     let sum = 1;
    //     sum += dfs(i + 1, j, oilColumns)
    //     sum += dfs(i - 1, j, oilColumns)
    //     sum += dfs(i, j + 1, oilColumns)
    //     sum += dfs(i, j - 1, oilColumns)

    //     return sum;
    // }


    const row = land.length;
    const col = land[0].length;
    const visited = new Array(row).fill(0).map(() => new Array(col).fill(false));
    const columnOil = new Array(col).fill(0);

    function bfs(i, j) {
        const queue = [[i, j]];
        const oilColumns = new Set();
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let oilSize = 0;

        visited[i][j] = 1;
        oilColumns.add(j);
        oilSize++;

        while (queue.length > 0) {
            const [start, end] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = start + dx;
                const ny = end + dy;

                if (nx >= 0 && nx < row && ny >= 0 && ny < col && !visited[nx][ny] && land[nx][ny] === 1) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = 1;
                    oilColumns.add(ny);
                    oilSize++;
                }
            }
        }
        return { oilSize, oilColumns };
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (!visited[i][j] && land[i][j] === 1) {
                const { oilSize, oilColumns } = bfs(i, j);

                oilColumns.forEach(col => {
                    columnOil[col] += oilSize
                })
            }
        }
    }
    return Math.max(...columnOil)
}