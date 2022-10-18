/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    /*
    //bruteforce solution --> Nested For-loops TC: O(n^2) SC: O(1)
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false; 
    */
    //Optimal solution --> Use of hashmap TC: O(n), SC: O(n)
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in hash){
            return true;
        } else {
            hash[nums[i]] = 1;
        }
    }
    return false;
    
};