//bruteforce - double for loop TC: O(n^2), SC: O(1)
var maxArea = function(height) {
    let vol = 0;
    for(let i = 0; i < height.length - 1; i++){
        for(let j = i+1; j < height.length; j++){
                let currVol = Math.min(height[i], height[j]) * (j-i);
                vol = Math.max(vol, currVol);
        }
    }
    return vol;
};

//Optimal Solution - Two Pointers, TC: O(n), SC: O(1)
var maxArea = function(height) {
    let vol = 0;
    let start = 0;
    let end = height.length-1;
    while(start < end){
        //compute vol of current container heights and compare to max vol seen so far
        let currVol = Math.min(height[start], height[end]) * (end-start);
        vol = Math.max(vol, currVol);
        //adjust container heights based on which height is smaller
        if(height[start] > height[end]){
            end--;
        } else{
            start++;
        }
    }
    return vol;
};