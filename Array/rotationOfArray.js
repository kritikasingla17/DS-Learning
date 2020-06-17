// Rotation of an array with Index n
// input [1,2,3,4,5] index=2
//output [3,4,5,1,2]


function rotationOfArrayWithIndex(arr,index){
    var resultArr=[];
    for(var i=index,j=0;i<arr.length;i++,j++){
        resultArr[j]=arr[i];
    }
    for(var i=0,j=resultArr.length;i<index;i++,j++){
        resultArr[j]=arr[i];
    }

    return resultArr
}


// console.log(rotationOfArrayWithIndex([1,2,3,4,5,7,8,9],3));