let gameboard = [];

for (let i=0; i<8; i++) {
    gameboard[i] = [];
    for (let j=0; j<8; j++) {
        gameboard[i][j] = [];
        let nextX;
        let nextY;

        nextX = i - 1;
        nextY = j + 2;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) gameboard[i][j].push(new Array(nextX, nextY));

        nextX = i - 1;
        nextY = j - 2;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) gameboard[i][j].push(new Array(nextX, nextY));

        nextX = i + 1;
        nextY = j + 2;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) gameboard[i][j].push(new Array(nextX, nextY));

        nextX = i + 1;
        nextY = j - 2;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) gameboard[i][j].push(new Array(nextX, nextY));

        nextX = i + 2;
        nextY = j - 1;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) gameboard[i][j].push(new Array(nextX, nextY));

        nextX = i + 2;
        nextY = j + 1;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) gameboard[i][j].push(new Array(nextX, nextY));

        nextX = i - 2;
        nextY = j + 1;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) gameboard[i][j].push(new Array(nextX, nextY));

        nextX = i - 2;
        nextY = j - 1;
        if (nextX>=0 && nextX<8 && nextY>=0 && nextY<8) gameboard[i][j].push(new Array(nextX, nextY));
    }
}
