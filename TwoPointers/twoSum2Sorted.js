/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    //TC: O(n) SC: O(1)
    //compute sum and compare it to target, increment/decrement pointers is sum is higher or lower than target.
    let start = 0;
    let end = numbers.length-1;
    let sum = numbers[start] + numbers[end];
    
    while(sum != target){
        if(sum < target){
            start++;
        }
        else if(sum > target){
            end--;
        }
        sum = numbers[start] + numbers[end]
    }
    return [start+1, end+1]
}