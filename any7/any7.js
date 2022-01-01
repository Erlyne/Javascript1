//Write a function to check if any of the numbers given in an array contain a 7.

function anySeven(nums) {
return nums.some(num => num === 7);
}

console.log(anySeven([1, 2, 7, 4, 5]));
