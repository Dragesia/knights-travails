import movesGraph from "./movesGraph.js";
import shortestPath from "./shortestPath.js";

function getIndex(arr) {
    return arr[0] * 10 + arr[1];
}

function getPosition(num) {
    let X = parseInt(num / 10);
    let Y = num % 10;
    return [X, Y];
}

export default function knightMoves(src, dest) {
    src = getIndex(src);
    dest = getIndex(dest);
    let result = shortestPath(movesGraph, src, dest, 77);

    console.log("You made it in", result.length, "moves! Here's your path: ");
 
    for (let i = result.path.length - 1; i >= 0; i--) {
        console.log(getPosition(result.path[i]));
    }
}