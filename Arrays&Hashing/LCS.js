
//bruteforce: TC: O(nlogn), SC: O(1)
var longestConsecutive = function(nums) {
    if(!nums || nums.length == 0) return 0;
    nums = nums.sort((a,b)=>a-b);
    let LCS = 1;
    let currentLCS = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            if(nums[i] == nums[i-1] + 1){
                currentLCS++;
            } else {
                currentLCS = 1;
            }
            LCS = Math.max(LCS, currentLCS);
        }
    }
    return LCS;
};

//optimal solution: TC: O(n), SC: O(n) -> space for set
//Create a set of the nums array (eliminates duplicates, allows for O(1) lookup)
//iterate over set until we find a value where its value - 1 doesnt exist in the set (i.e first number in a potential sequence)
//once we find such value, keep incrementing currLCS counter until the set no longer has the value + 1.
//update global counter with max LCS count.
var longestConsecutive = function(nums) {
    //using a set
    if(!nums || nums.length == 0) return 0;
    let numSet = new Set(nums);
    let LCS = 1;
    
    for(let num of numSet){
        if(numSet.has(num-1)){
            continue;
        }
        let currLCS = 1;
        let currNum = num;
        while(numSet.has(currNum+1)){
            currLCS++;
            currNum++;
        }
        LCS = Math.max(LCS, currLCS);
    }
    return LCS;
};