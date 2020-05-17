/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/


var findAnagrams = function(s, p) {
    let sLen = s.length;
    let pLen = p.length;
    if(pLen > sLen) return []; 

    let sCount = new Array(26).fill(0);
    let pCount = new Array(26).fill(0);

    function isEqual(){
        for(let i=0; i<26; i++){
            if(sCount[i]!==pCount[i]) return false;
        }
        return true;
    }

    for(let i=0; i<pLen; i++){
        let index = p.charCodeAt(i) - 97
        pCount[index] += 1;
    }

    let result = [];

    for(let i=0; i<sLen; i++){
        let index = s.charCodeAt(i) - 97;
        sCount[index] += 1;

        if(i >= pLen) {
            let idx = s.charCodeAt(i - pLen) - 97;
            sCount[idx] -= 1;
        }

        if(isEqual()){
            result.push(i - pLen + 1); 
        }
    }

    return result;
};