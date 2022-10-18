/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    /*
    //bruteforce solution - sort s and t, then compare strings. TC: O(slogs), SC: O(s)-> where s is the number of letters in string ... due to sorting.
    if(s.length != t.length) return false;
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    return s === t;
    */
    
    //Optimal solution - use a hashmap to store freq. of letters in s string, then iterate through t string and decrement freq of letters, if find a letter thats not in the hash or see that the freq of letters goes beyond 0 (i.e more letters), we return false.
    //TC: O(s), SC: O(s), where s is the number of letters in s string
    if(s.length != t.length) return false;
    let hash = {};
    
    for(let i = 0; i < s.length; i++){
        if(s[i] in hash){
            hash[s[i]] += 1;
        } else {
            hash[s[i]] = 1;
        }
    }
    for(let i = 0; i < t.length; i++){
        if(t[i] in hash && hash[t[i]] > 0){
            hash[t[i]] -= 1;
        } else {
            return false;
        }
    }
    return true; 
};