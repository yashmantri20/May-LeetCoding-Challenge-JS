/*

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False
 
Note:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/



var checkInclusion = function(s1, s2) {
 if(s1.length > s2.length) return false;
    const charArray = new Array(26).fill(0);
    
    for(const letter of s1){
        charArray[letter.charCodeAt(0) - 97]++; 
    }
    
    for(let i=0;i< s2.length; i++){
        const current = s2[i];
        charArray[current.charCodeAt(0) - 97]--;
        
        if( i - s1.length >=0 ){
            charArray[s2.charCodeAt(i-s1.length) - 97]++;
        }
        if(countAllZero(charArray)) return true;
    }
    return false;
};

function countAllZero(arr){
    for(const letter of arr){
        if(letter !== 0) return false;
    }
    return true;
}