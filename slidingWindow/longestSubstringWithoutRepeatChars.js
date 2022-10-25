//Optimal: TC: O(n), SC: O(n)
//Use sliding window approach + hashmap to track letters seen so far
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let seen = {};
    let max = 0;
    
    while(end < s.length){
        //check if letter at end pointer is in the substring we've seen so far, if not add it, increment the end pointer, and 
        //compare the max substring with current substring length
        if(!(s[end] in seen)){
            seen[s[end]] = 1;
            end++;
            max = Math.max(max, end - start);
        } else {
        //if letter is in the substring, remove letters from the start of substring until we no longer have duplicates
            delete seen[s[start]]
            start++;
        }
    }
    return max;
}