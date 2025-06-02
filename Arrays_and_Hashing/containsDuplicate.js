class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */

  // Sorting method
  hasDuplicate(
    nums // (a, b) => a - b sorts numbers in ascending order
  ) {
    nums.sort((a, b) => a - b);
    // index is set to the second position of array
    // have loop execute for the length of the array, moving up 1 index each time
    for (let i = 1; i < nums.length; i++) {
      // if index is equal to the previous index(i-1), there is a duplicate present
      if (nums[i] === nums[i - 1]) {
        return true;
      }
    }
    return false;
  }
}

console.log(hasDuplicate);
