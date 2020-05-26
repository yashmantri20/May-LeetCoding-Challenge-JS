/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
*/

var findMaxLength = function(nums) {
     const memo = new Map();
    memo.set(0, -1);
    let cnt = 0, maxLen = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? cnt-- : cnt++;
        if (memo.has(cnt)) {
            maxLen = Math.max(maxLen, i - memo.get(cnt));
        } else {
            memo.set(cnt, i);
        }
        if (memo.has(cnt) === -1) {
            memo.set(cnt, i);
        }
    }
    return maxLen;
};