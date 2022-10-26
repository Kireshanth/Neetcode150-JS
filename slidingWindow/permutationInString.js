
//Optimal Solution -> TC: O(l1 + 26*(l2-l1)), SC: O(1) where l1 is string 1 length, l2 is string 2 length.
var checkInclusion = function(s1, s2) {
    //base case
    if(s2.length < s1.length) return false;
    //create hashmap to store frequency of letters in string 1
    let freqMap = {};
    
    for(let i = 0; i < s1.length; i++){
        if(!(s1[i] in freqMap)){
            freqMap[s1[i]] = 1; 
        } else {
            freqMap[s1[i]]++;
        }
    }
    //create pointers to represent inital window (window length will be length of string 1)
    let start = 0;
    let end = s1.length;
    
    //create hashmap to store frequency of letters in string 2
    let freqMap2 = {};
    for(let i = start; i < end; i++){
        if(!(s2[i] in freqMap2)){
            freqMap2[s2[i]] = 1; 
        } else {
            freqMap2[s2[i]]++;
        } 
    }
    
    //while our window is not out of range, compare the hashmaps, if identical return turn
    while(end <= s2.length){
        if(matches(freqMap, freqMap2)){
            return true;    
        }
        //else adjust the hashmap of the 2nd string by adjusting the key/value pairs. Remove from beginning of window, add to the end; 
        freqMap2[s2[start]]--;
        if(s2[end] in freqMap2){
            freqMap2[s2[end]]++;
        } else {
            freqMap2[s2[end]] = 1;
        }
        //adjust the window position for the next iteration
        end++;
        start++;
    }
    return false; 
};

function matches(map1, map2){
    //compare two hashmaps for equal key value pairs (i.e both strings are considered permutations of each other)
    for(let key in map1){
        if(!(key in map2) || map1[key] != map2[key]){
            return false;
        } 
    }
    return true;
}