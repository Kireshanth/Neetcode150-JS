function connectedComponentsCount(graph){
    //keep count of all components visited
    let count = 0;
    //using a set to track all nodes that we visit, will prevent us from double counting a component if the node was already seen
    let visited = new Set();
    //iterate through the nodes in the graph (accessing the keys)
    for(let node in graph){
        //if explore function returns true, we have fully explored a new component, so increment count
      if(explore(graph, node, visited) == true){
        count++;
      }
    }
    return count;
};

//dfs method to fully explore component
function explore(graph, node, visited){
    //if we've visited this node, return false
    if(visited.has(String(node))) return false;
    //add node to visited set
    visited.add(String(node));
    //fully explore all of the current nodes neighbors
    for(let neighbor of graph[node]){
        //call explore functioon on neighbours to explore the neighbor's neighbors (i.e cover all nodes apart of component)
      explore(graph, neighbor, visited);
    }
    //after the loop, we would have visited all nodes. We can return true
    return true;
}