/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    //track max size island that we explored so far.
    let maxSize = 0;
    //iterate through all cells in the map
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[r].length; c++){
            //check to see if we see an island cell
            if(grid[r][c] == 1){
                //perform DFS algorithm, which checks all neighboring cells and computes island size
                maxSize = Math.max(maxSize, explore(grid, r, c))
            } 
        }
    }
    //return the max island size seen after iterating through the entire board
    return maxSize;
};

//dfs method
function explore(grid, row, column){
    // check if we're out of range
    if(row < 0 || column < 0 || row >= grid.length || column >= grid[0].length){
        return 0;
    }
    // check if current cell is not a land segment
    if(grid[row][column] != 1){
        return 0;
    }
    //count size of island as 1
    let size = 1;
    //change value of cell, to prevent us from recounting this land segment after we explored it initally
    grid[row][column] = "#";
    //perform DFS method on all neighboring cells, and add the total count of land segments
    size += explore(grid, row+1, column) + explore(grid, row-1, column) + explore(grid, row, column+1) + explore(grid, row, column-1)
    //after the recurse calls are finished, return the total island size
    return size;
}