const graph = {
    a: ["b", "c"], // ["c", "b"]
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
};

const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];
    while (queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for ( let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
}
breadthFirstPrint(graph, 'a'); //acbedf
quer = [source]
current = que.shift()
for (graph[current]){
    MediaQueryList.push
}