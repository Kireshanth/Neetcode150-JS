//Optimal Solution - TC: O(n), SC: O(n) 
// Use sliding window + hashmap
//determine maxFreq as you populate freq hashmap
//maxFreq: the frequency of the most repeated letter in string
// window size - maxFreq <= k to be a valid substring
var characterReplacement = function(s, k) {
    let start = 0;
    let max = 0;
    let maxFreq = 0;
    let seen = {};
    
    for(let end = 0; end < s.length; end++){
        //populate freq hashmap
        if(!(s[end] in seen)){
            seen[s[end]] = 1;
        } else {
            seen[s[end]]++;
        }
        //update maxFreq to be the number of times the most repeated letter is in substring
        maxFreq = Math.max(maxFreq, seen[s[end]]);
        //compute window(i.e substring length)
        let window = end - start + 1;
        //check if window is valid, remove letters from beginning of freq map until substring is valid
        if(window - maxFreq > k){
            seen[s[start]]--;
            start++;
        } else {
            //update longest substring length if window(i.e substring length) is valid
            max = Math.max(max, window)
        }
    }
    return max;
};