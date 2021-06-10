/*We need to call this function three times:

1.Once to reverse the entire array.
2.Once to reverse from nums[0] to k.
3.Once to reverse from k to the end.
*/


function rotateArray(nums, k) {

    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    k %= nums.length;
  
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
  
    console.log(nums);
}
var arr=[1, 2, 4, 6, 8, 9];
var k=2;
rotateArray(arr, k);
