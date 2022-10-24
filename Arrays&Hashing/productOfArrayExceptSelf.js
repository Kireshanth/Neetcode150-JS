/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Bruteforce: TC: O(n^2), SC: O(1) 
//double for-loop to compute products
var productExceptSelf = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let product = 1;
        for(let j = 0; j < nums.length; j++){
            if(j != i){
                product *= nums[j];
            }
        }
        result.push(product);
    }
    return result;
};

//OPTIMAL SOLUTION: TC: O(n), SC: O(n)
//Create two arrays to store products of trailing product from left to right
 var productExceptSelf = function(nums) {
    let prefix = new Array(nums.length).fill(1)
    let sufix = new Array(nums.length).fill(1)
    let res = new Array(nums.length).fill(1)
    
    for(let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i-1] * nums[i-1]
    }
    for(let i = nums.length-2; i >= 0; i--){
        sufix[i] = sufix[i+1] * nums[i+1]
    }
    for(let i = 0; i < nums.length; i++){
        res[i] = prefix[i] * sufix[i]
    }
    return res;
};

//FOLLOW UP OPTIMAL SOLUTION
//TC: O(n), SC: O(1), result array does not count as extra space
//Similar to solution above, but we use one single array to maintain trailing product from left to right AND
//then a single variable to hold the trailing product from right to left. The result array is updated and return for the total product
var productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(1);
    
    for(let i = 1; i < nums.length; i++){
        result[i] = result[i-1] * nums[i-1];
    }
    let product = 1;
    for(let i = nums.length-1; i >= 0; i--){ 
        result[i] = result[i] * product;
        product = nums[i] * product
    }
    return result;
};