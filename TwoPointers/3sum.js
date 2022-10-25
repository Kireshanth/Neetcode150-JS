
//Bruteforce Solution - TC: O(n^3), SC: O(1)...assuming result array is not included.
//Sort array, triple for loop to search for triplet solution. Avoid duplicate values of nums[i], nums[j], and nums[k]
var threeSum = function(nums) {
    let result = [];
    nums = nums.sort((a,b)=>a-b)
    for(let i = 0; i < nums.length; i++){
        //after the first iteration, ensure next iterations do not have duplicates (compare current to previous value)
        if(i > 0 && nums[i] == nums[i-1]){
            continue;
        }
        //set next value to be one after i, all values must be distinct
        for(let j = i + 1; j < nums.length; j++){
            if(j > i+1 && nums[j] == nums[j-1]){
                continue;
            }
            //set next value to be one after j, all values must be distinct
            for(let k = j + 1; k < nums.length; k++){
                if(k > j+1 && nums[k] == nums[k-1]){
                    continue;
                }
                if(nums[i] + nums[j] + nums[k] == 0){
                    result.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return result;
};

//Optimal Solution - TC: O(n^2), SC: O(1)...assuming result array is not included.
//Sort array, look for two values that sum to give you negative compliment of nums[i], then use two pointer approach (twoSum)
var threeSum = function(nums) {
    let result = [];
    nums = nums.sort((a,b)=>a-b)
    for(let i = 0; i < nums.length; i++){
        //avoid duplicate values for nums[i]
        if(i > 0 && nums[i] == nums[i-1]){
            continue;
        }
        let start = i+1;
        let end = nums.length-1;
        let target = -nums[i];
        while(start < end){
            let sum = nums[start] + nums[end];
            if(sum == target){
                //if three numbers exist, add to result
                result.push([nums[i], nums[start], nums[end]])
                //avoid duplicates for other two values
                while(start < end && nums[start] == nums[start+1]) start++;
                while(start < end && nums[end] == nums[end-1]) end--;
                start++;
                end--;
            } else if(sum > target){
                end--;
            } else {
                start++
            }
        }
    }
    return result;
};