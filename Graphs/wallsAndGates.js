function wallsAndGates(rooms) {
    //iterate through the map, add check for GATES. Add their positions into the queue. We're going to perform
    //BFS at each gate one at a time, and relabel all cells if with their position from the gate if they
    //haven't been explored already. This will ensure that each empty room will have the distance to the closest gate.

    //TC: O(n*m), SC: O(n*m) -> if all cells are gates, our stack size would be n*m
    let queue = [];
    let visit = new Set();
    //position of each cell from the closest gate
    let count = 0;
    for(let row = 0; row < rooms.length; row++){
        for(let col = 0; col < rooms[row].length; col++){
            if(rooms[row][col] == 0){
                queue.push([row,col])
                //Need to write grid position as a string inside a set
                visit.add([row,col].toString())
            }
        }
    }
    while(queue.length != 0){
        //ensure we are incrementing the count after each layer, ie once we complete BFS for all gates.
        let length = queue.length;
        for(let i = 0; i < length; i++){
            let current = queue.shift();
            let row = current[0];
            let col = current[1];
            rooms[row][col] = count;
            addRooms(row+1, col);
            addRooms(row-1, col);
            addRooms(row, col+1);
            addRooms(row, col-1);
        }
        count++;
    }

    function addRooms( row, col){
        //check if position is out of bounds, if we visited that cell before, or if that cell is a wall (-1)
        if(row < 0 || col < 0 || col == rooms[0].length || row == rooms.length || visit.has([row, col].toString()) || rooms[row][col] == -1){
            return
        }
        //Add cell to visited set (remember to convert to string)
        visit.add([row,col].toString())
        //add position into queue
        queue.push([row, col])
    }
    console.log(rooms);
}


wallsAndGates([[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]])