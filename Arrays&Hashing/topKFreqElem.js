//Optimal Solution: Bucket Sort, TC: O(n), SC: O(n)
 var topKFrequent = function(nums, k) {

    let freq = {};
    let result = [];
    //create a bucket using an array where each index represents the freq of numbers. Each index will hold an array of 
    //all numbers that have the frequency. Worst case scenario, all elements in nums array are the same so bucket needs to be size of
    //nums.
    let bucket = new Array(nums.length+1)
    for(let i = 0; i < bucket.length; i++){
        bucket[i] = [];
    }
    //use hashmap to store freq
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in freq){
            freq[nums[i]]++;
        } else {
            freq[nums[i]] = 1;
        }
    }
    //iterate over hashmap keys to populate bucket array
    for(let num in freq){
        bucket[freq[num]].push(num);
    }
    //create an array with all values sorted in decreasing frequency
    for(let i = bucket.length-1; i >= 0; i--){
        result.push(...bucket[i])
    }
    //return top k freq elements
    return result.slice(0, k);
};