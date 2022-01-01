//print numbers side range

/**
 * nums: list of numbers
 * lowest: lowest number to print
 * highest: highest number to print
 */
let numList = [];
let inRange = function (nums, lowest, highest) {
    for (let num of nums) {
        if (num >= lowest & num <= highest) {
            numList.push(num);
        }
    }
    return numList;

}

console.log(inRange([10, 20, 30, 40], 15, 30)); /**Should print 20, 30 */
