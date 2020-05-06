/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Example 1:

Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 */

var findComplement = function(num) {
    a = parseInt(num, 10).toString(2);
    s = ""
    for(var i = 0; i<a.length;i++)
        {
            c = a.charAt(i)
            s += c=== '1' ? '0' : '1'
        }
    ans  = parseInt(s,2)
    return ans
};