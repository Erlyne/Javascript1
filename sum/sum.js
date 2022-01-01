//Given list of numbers, return sum of those numbers


/*
For example:
    sum_nums([1, 2, 3, 4])

Should return (not print):
    10
*/
let sum = 0;
function sum_nums(nums) {
    for (let num of nums) {
        sum += num;
    }
    return sum;
}


console.log(sum_nums([1, 2, 3, 4]));