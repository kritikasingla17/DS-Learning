// Given a binary array, find the maximum number of consecutive 1s in this array.

//input=[1,1,1,0,0,1,1,0,1,1,1,1]  ---->    output = 4

function findMaxConsecutiveOnes(arr){
    var count=0;
    var count2=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]===1){
            count++;
        }
        else{
            
            count=0
        }
        if(count2<count){
            count2=count;
        }
    }
    return count2;

}

// console.log(findMaxConsecutiveOnes([1]))