/*Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true*/

var canConstruct = function(ransomNote, magazine) {
    count = 0
    for(var i = 0; i<ransomNote.length;i++)
        {
            c = ransomNote.charAt(i)
            ind = magazine.indexOf(c)
            if(ind != -1)
                {
                    magazine = magazine.replace(c,'');
                    count += 1
                }
            else
                {
                    break
                }
        }
    if(count === ransomNote.length)
        {
            return true 
        }
    else
        {
            return false
        }
    
};