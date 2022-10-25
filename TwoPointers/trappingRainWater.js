
//TC: O(n), SC: O(n) -> Create two arrays to store max left and right heights for each value in height array
//water stored = Math.min(maxLeft[i], maxRight[i]) - height[i]
var trap = function(height) {
    let maxLeft = new Array(height.length).fill(0);
    let maxRight = new Array(height.length).fill(0);
    let water = 0;
    
    for(let i = 1; i < height.length; i++){
        maxLeft[i] = Math.max(maxLeft[i-1], height[i-1])
    }
    for(let i = height.length-2; i >= 0; i--){
        maxRight[i] = Math.max(maxRight[i+1], height[i+1])
    }
    for(let i = 0; i < height.length; i++){
        water += Math.max(Math.min(maxLeft[i], maxRight[i]) - height[i], 0)
    }
    return water;
};

//OPTIMAL SOLUTION:
//TC: O(n), SC: O(1) -> Use two pointers to compare the max heights from the left and right of the heights array
var trap = function(height) {
    //handle base case of empty height array, return zero
    if(!height) return 0;
    
    let left = 0;
    let right = height.length-1;
    let leftMax = height[left];
    let rightMax = height[right];
    let water = 0;
    
    while(left < right){
        if(leftMax < rightMax){
            left++;
            water += Math.max(leftMax - height[left], 0);
            leftMax = Math.max(leftMax, height[left])
        } else {
            right--;
            water += Math.max(rightMax - height[right], 0);
            rightMax = Math.max(rightMax, height[right])
        }
    }
    return water;
};