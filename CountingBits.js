/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]
Example 2:

Input: 5
Output: [0,1,1,2,1,2]
*/

const countBits = num => {
    var a = [ 0 ]
    
    for ( let i = 1; i <= num; i++ )
        a.push( i % 2 ? a[ Math.floor( i / 2 ) ] + 1 : a[ i / 2 ] )
    
    return a
}