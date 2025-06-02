// Difficulty: Easy

// Given two strings s and t, return true if the 
// two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, 
// but the order of the characters can be different.

// Constraints: s and t consist of lowercase English letters.

// example 1
//     Input: s = "racecar", t = "carrace"
//     Output: true

// example 2
//     Input: s = "jar", t = "jam"
//     Output: false

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // First, checking if inputs are the same length, !== -> cant be an anagram
        if (s.length !== t.length) {
            return false;
        }

        const countS = {};
        const countT = {};
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }
        return true;
    }
}
