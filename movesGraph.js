let movesGraph = [];

for (let i=0; i<8; i++) {
    for (let j=0; j<8; j++) {
        let src = i * 10 + j;
        movesGraph[src] = [];
        let nextX;
        let nextY;
        let result;

        nextX = i - 1;
        nextY = j + 2;
        result = nextX * 10 + nextY;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) movesGraph[src].push(result);

        nextX = i - 1;
        nextY = j - 2;
        result = nextX * 10 + nextY;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) movesGraph[src].push(result);

        nextX = i + 1;
        nextY = j + 2;
        result = nextX * 10 + nextY;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) movesGraph[src].push(result);
        nextX = i + 1;
        nextY = j - 2;
        result = nextX * 10 + nextY;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) movesGraph[src].push(result);

        nextX = i + 2;
        nextY = j - 1;
        result = nextX * 10 + nextY;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) movesGraph[src].push(result);

        nextX = i + 2;
        nextY = j + 1;
        result = nextX * 10 + nextY;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) movesGraph[src].push(result);

        nextX = i - 2;
        nextY = j + 1;
        result = nextX * 10 + nextY;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) movesGraph[src].push(result);

        nextX = i - 2;
        nextY = j - 1;
        result = nextX * 10 + nextY;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) movesGraph[src].push(result);
    }
}

export default movesGraph;