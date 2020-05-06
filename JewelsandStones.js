/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example: Input: J = "aA", S = "aAAbbbb" Output: 3
*/

var numJewelsInStones = function(J, S) {
    count = 0
    for(var i = 0 ; i<J.length ; i++)
        {
            c = J.charAt(i)
            for(var j = 0 ; j<S.length ; j++)
                {
                    b = S.charAt(j)
                    if(c === b)
                        {
                            count += 1
                        }
                }
        }
    return count
};