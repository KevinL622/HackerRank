/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Initialize largest and second largest values ar negative infinity.
    var largest = -Infinity;
    var secondLargest = -Infinity;

    /*
    Loop through the input array and keep track of the largest and second
    largest values.
    */
    for (var i =0; i< nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] < largest && nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    };

    return secondLargest;
}

console.log(getSecondLargest([2, 4, 5, 6, 7, 7, 8, 9, 2, 6, 4])); //returns 8
