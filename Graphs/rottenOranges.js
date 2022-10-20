/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    //Very similar to walls and gates! -- iterate through all cells and add the positions of the rotten oranges to the queue. Also add their positions to the visited set
    //TC: O(n*m), SC: O(n*m)... all cells have rotten oranges.
    let count = 2;
    //used to find the latest time it took for all oranges to be rotten
    let minTime = 0;
    //create a set to track the cell positions that we have already visited
    let visit = new Set();
    let queue = [];
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            //if the cell has a rotten orange, add it to the queue and add its position to the visited set
            if(grid[row][col] == 2){
                queue.push([row,col])
                //using .toString method to convert the position into a string, since storing arrays in a set will store a reference
                //it will allow mutiple copies of the array. Changing it into a string will ensure we don't have duplicates.
                visit.add([row, col].toString());
            }
        }
    }
    //function to check if the cell is valid and has a fresh orange in it
    function turnRotten(row, col){
        if(row < 0 || row == grid.length || col < 0 || col == grid[0].length 
           || visit.has([row,col].toString()) || grid[row][col] == 0){
            return
        }
        //if it's a fresh orange, add the position to the visit set and queue
        visit.add([row,col].toString());
        queue.push([row, col])
    }
    //apply BFS algorithm on all rotten oranges at the same time, advancing layer by layer
    while(queue.length != 0){
        //having a inner for loop will ensure we will increment the count after each iteration of BFS
        let length = queue.length;
        for(let i = 0; i < length; i++){
            let current = queue.shift();
            let row = current[0];
            let col = current[1];
            grid[row][col] = count;
            //check cell positions of all neighboring cells for fresh oranges
            turnRotten(row+1, col)
            turnRotten(row-1, col)
            turnRotten(row, col+1)
            turnRotten(row, col-1)
        }
        count++;
    }
    //At this point, all of the fresh oranges that are now rotten will have an updated value (reflects the time - 2)
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            //check through all cells for a fresh orange, if one exists, then not all oranges are rotten
            if(grid[row][col] == 1){
                return -1;
            }
            //if the cell has a value > 2, we want to update the minTime to be the highest value (i.e how long did it take 
            // the last orange to turn rotten)
            if(grid[row][col] > 2){
                minTime = Math.max(minTime,  grid[row][col] - 2)
            }
        }
    }
    return minTime
};