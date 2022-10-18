/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//Bruteforce Method ⇒ TC: O(n*slogs), SC: O(n) s ⇒ size of the average word length, n ⇒ number of words
 var groupAnagrams = function(strs) {
    let map = {}
    for(let i = 0; i < strs.length; i++){
        let hash = strs[i].split('').sort().join("");
        if(hash in map){
            map[hash].push(strs[i]);
        } else {
            map[hash] = [strs[i]];
        }
    }
    return Object.values(map)
};

//Optimal Method ⇒ TC: O(n*m), SC: O(n) m ⇒ size of the average word length, n ⇒ number of words
var groupAnagrams = function(strs) {
    let map = {}
    for(let i = 0; i < strs.length; i++){
        let letters = new Array(26).fill(0)
        for(let j = 0; j < strs[i].length; j++){
            let ascii = strs[i][j].charCodeAt(0) - 97;
            letters[ascii] += 1;
        }
        letters = letters.join("#")
        if(letters in map){
            map[letters].push(strs[i]);
        } else {
            map[letters] = [strs[i]];
        }
    }
    return Object.values(map)
};