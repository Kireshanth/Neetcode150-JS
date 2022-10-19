/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    //TC: O(n*m), SC: O(n*m) => Worst case scenario we would need to run DFS on every cell (all cells meet Pacific/Atlantic)
    //General Solution -> Perform DFS method on cells bordering the pacific and atlantic ocean.
    //If a cell can be reached from the ocean, add it to their respective hash maps
    //Iterate through keys in a hashmap, and check if it exists in the other ocean's hash map, add cell
    //into final result if so.

    //hashmaps to store cell positions that can reach the ocean
    let pacific = {};
    let atlantic = {};
    let result = [];
    
    //iterate through the top and bottom of the grid, perform DFS algo for cells neighboring pac and atl oceans
    for(let c = 0; c < heights[0].length; c++){
        dfs(0, c, -1, pacific);
        dfs(heights.length-1, c, -1, atlantic);
    }
    //iterate through the left and right of the grid, perform DFS algo for cells neighboring pac and atl oceans
    for(let r = 0; r < heights.length; r++){
        dfs(r, 0, -1, pacific);
        dfs(r, heights[0].length-1, -1, atlantic)
    }
    //check for cells that exist in both hashmaps -- i.e can reach both oceans. Push cells into result
    for(let key in pacific){
        if(key in atlantic){
            result.push(pacific[key])
        }
    }
                
    return result;
    
    //prev --> keep track of value we just left from
    //ocean --> hashmap for either ocean
    function dfs(row, col, prev, ocean){
        //check for boundary conditions
        if(row < 0 || col < 0 || row >= heights.length || col >= heights[0].length){
            return;
        }
        //check if we can traverse to this cell, since we're moving from the ocean, values need to be increasing
        if(heights[row][col] < prev){
            return;
        }
        //check if we have already visited this cell in our DFS traversal
        if([row, col] in ocean){
            return;
        }
        //add cell's position to the current ocean's hashmap i.e this is a possible cell to traverse to.
        ocean[[row, col]] = [row, col];
        
        //perform algorithm for all possible directions
        dfs(row+1, col, heights[row][col], ocean);
        dfs(row-1, col, heights[row][col], ocean);
        dfs(row, col+1, heights[row][col], ocean);
        dfs(row, col-1, heights[row][col], ocean);
    }
};