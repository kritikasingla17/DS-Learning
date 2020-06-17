//Given an array nums of integers, return how many of them contain an even number of digits.

//Input: nums = [12,345,2,6,7896]
// Output: 2

/*
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count=0;
    for(var i=0;i<nums.length;i++){
        var numOfIntegers=0;
        var num=nums[i];
        while(!(num<1)){
            // console.log(num)
            num=num/10;
            numOfIntegers++;
        }
        if(numOfIntegers%2===0){
            count++;
        }
    }
    return count;
};

// console.log(findNumbers([12,345,2,6,7896,12,12,12,12,12]))