/**
 * @param {character[][]} grid
 * @return {number}
 */

//iterate through every cell in the grid and check for a "1", execute DFS function to group all adjacent land segments together,
//and increment count
 var numIslands = function(grid) {
    let count = 0;
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[r].length; c++){
            if(grid[r][c] == "1"){
                dfs(r,c);
                count++;
            }
        }
    }
    return count;
    
    //dfs function to explore all adjacent land segments and convert it to "#" to signify we have visited them already
    function dfs(row, col){
        //if our search is out of bounds return before checking element
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
        //if we're examining a segment that is not land, return
        if(grid[row][col] != "1"){
            return;
        }
        else{
        //mark that cell as visited
          grid[row][col] = "#"; 
        }
        //perform DFS algorithm on all adjacent directions
        return dfs(row + 1, col) || dfs(row - 1, col) || dfs(row, col+1) || dfs(row, col-1)
    }
};
