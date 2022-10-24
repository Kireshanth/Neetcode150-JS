//Use regex and string/array methods
//TC: O(n), SC: O(1)
 var isPalindrome = function(s) {
    let regex = /[^a-z0-9]/g
    s = s.toLowerCase().replaceAll(regex, "");
    return s == s.split("").reverse().join("");
};

//Two Pointers with regex
//TC: O(n), SC: O(1)
 var isPalindrome = function(s) {
    let start = 0;
    let end = s.length-1;
    let regex = /[a-z0-9]/
    s = s.toLowerCase();
    while(start < end){
        while(!regex.test(s[start])){
            start++;
        }
        while(!regex.test(s[end])){
            end--;
        }
        if(s[start] != s[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};