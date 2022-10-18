/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    /*
    
    //bruteforce - Nested for-loops TC: O(n^2), SC: O(1)
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
    
    */
    
    //Optimal Solution IF nums is sorted... if nums is already sorted TC: O(n), SC: O(1), sorting the array yourself will change the indexes of the problem
    /*
    let left = 0;
    let right = numsCopy.length-1;
    let val1;
    let val2;
    
    while(left != right){
        let sum = numsCopy[left] + numsCopy[right];
        if(sum > target){
            right--;
        } else if (sum < target){
            left++;
        } else {
            return [left, right]
        }
    }
    */
    
    //Optimal Solution - Use a hashmap to store values, check if remainder exists in map. TC: O(n), SC: O(n) .. n == num of elements, extra space
    //required to create hashmap
    
    let map = {}
    
    for(let i = 0; i < nums.length; i++){
        let remainder = target - nums[i];
        if(remainder in map){
            return [i, map[remainder]];
        } else {
            map[nums[i]] = i;
        }
    }
};