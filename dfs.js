const graph = {
    a: ["b", "c"], // ["c", "b"]
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
};

function depthFirstPrint(graph, source){
    const stack = [ source ];
    while (stack.length > 0){
        const current = stack.pop();
        console.log(current);
        for( let neighbour of graph[current]) {
            stack.push(neighbour)
        }
    }
}
// Recursive depth first traversal

const depthFirstPrint2 = (graph, source) => {
    console.log(source);
    for (let neighbour of graph[source]) {
        depthFirstPrint2(graph, neighbour);
    }
}
// depthFirstPrint(graph, 'a'); // abdfce
depthFirstPrint2(graph, 'a'); // abdfce if b follow c in graph