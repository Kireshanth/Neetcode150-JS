function connectedComponentsCount(graph){
    let count = 0;
    let visited = new Set();
    for(let node in graph){
      if(explore(graph, node, visited) == true){
        count++;
      }
    }
    return count;
};
    
function explore(graph, node, visited){
    if(visited.has(String(node))) return false;
    visited.add(String(node));
    for(let neighbor of graph[node]){
      explore(graph, neighbor, visited);
    }
    return true;
}