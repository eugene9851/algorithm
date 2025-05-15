function solution(players, m, k) {
    const servers = new Array(24).fill(0); // 각 시간대에 운영 중인 서버 수
    let result = 0;

    players.forEach((player, index) => {
        const neededServers = Math.floor(player / m);

        if (neededServers > servers[index]) {
            const addServers = neededServers - servers[index];

            for (let i = 0; i < k; i++) {
                if (index + i < 24) {
                    servers[index + i] += addServers;
                }
            }
            result += addServers;
        }
    })
    return result;
}