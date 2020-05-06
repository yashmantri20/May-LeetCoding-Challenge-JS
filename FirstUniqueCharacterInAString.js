/*Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.*/

var firstUniqChar = function(s) {
    if(s.length != 0)
    {
    for(var i=0;i<s.length;i++){
        c = s.charAt(i)
        if(s.indexOf(c) === s.lastIndexOf(c)){
            ind = s.indexOf(c)
            break
        }
        else{
            ind = "-1"
        }
    }
    }
    else{
        ind = "-1"
    }
    return ind
};