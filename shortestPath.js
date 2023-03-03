const max_value = 9007199254740992;
 
function BFS(adj, src, dest, v, pred, dist)
{
    let queue = [];
    let visited = new Array(v);
 
    for (let i = 0; i < v; i++) {
        visited[i] = false;
        dist[i] = max_value;
        pred[i] = -1;
    }
 
    visited[src] = true;
    dist[src] = 0;
    queue.push(src);
 
    while (queue.length > 0) {
        let u = queue[0];
        queue.shift();
        for (let i = 0; i < adj[u].length; i++) {
            if (visited[adj[u][i]] == false) {
                visited[adj[u][i]] = true;
                dist[adj[u][i]] = dist[u] + 1;
                pred[adj[u][i]] = u;
                queue.push(adj[u][i]);
 
                if (adj[u][i] == dest)
                    return true;
            }
        }
    }
    return false;
}
 
export default function shortestPath(adj, s, dest, v)
{
    let pred = new Array(v).fill(0);
    let dist = new Array(v).fill(0);
 
    BFS(adj, s, dest, v, pred, dist);

    let path = new Array();
    let crawl = dest;
    path.push(crawl);
    while (pred[crawl] != -1) {
        path.push(pred[crawl]);
        crawl = pred[crawl];
    }

    return {length: dist[dest], path: path};
}