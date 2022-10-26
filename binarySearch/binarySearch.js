//TC: O(nlogn) SC: O(1)
var search = function(nums, target) {
    let lo = 0;
    let high = nums.length-1;
    
    while(lo <= high){
        let mid = Math.floor((lo + high)/2);
        if(nums[mid] == target){
            return mid;
        } else if(nums[mid] > target){
            high = mid-1;
        } else {
            lo = mid + 1;
        }
    }
    return -1;
};