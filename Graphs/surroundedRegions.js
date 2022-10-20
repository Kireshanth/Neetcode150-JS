/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//TC: O(n*m) -> need to reiterate over each cell, SC: O(n*m) -> if all cells are "O"s we would need to perform
//DFS method on each cell before returning... call stack would have n*m calls.

//Main Logic: 
//1) Iterate around the cells on the perimeter, and check for "O"s, 
//mark them as "T" then perform DFS to check for connecting "O"s to mark as well.
//2) Iterate over each cell and switch all O's to X's then all T's back to O's
 var solve = function(board) {
    //Iterating over left and right perimeter rows, perform DFS
    for(let col = 0;  col < board[0].length; col++){
        explore(board, 0, col);
        explore(board, board.length-1, col);
    }
    //Iterating over top and bottom perimeter rows, perform DFS
    for(let row = 0;  row < board.length; row++){
        explore(board, row, 0);
        explore(board, row, board[0].length-1);
    }
    //Iterating through every cell
    //change all cells marked as O to X (these cells were surrounded by X's)
    //change all cells marked as T to O (these cells were NOT surrounded by X's)
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[0].length; col++){
            if(board[row][col] == "O"){
                board[row][col] = "X"
            }
            if(board[row][col] == "T"){
                board[row][col] = "O"
            }
        }
    }
};

function explore(grid, row , col){
    if(row < 0 || col < 0 || row == grid.length || col == grid[0].length){
        return;
    }
    if(grid[row][col] != "O"){
        return;
    }
    else{
        grid[row][col] = "T"
    }
    explore(grid, row+1 , col)
    explore(grid, row-1 , col)
    explore(grid, row , col+1)
    explore(grid, row , col-1)
}