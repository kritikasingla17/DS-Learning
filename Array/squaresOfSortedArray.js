//Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.


var inputArr=[-4,-1,0,3,10];
var outputArr=[0,1,9,16,100];

function squaresOfsortedArr(inputArr){

    var resultArr=[];
    for(var i=0;i<inputArr.length;i++){
        resultArr[i]=inputArr[i]*inputArr[i];
    }

    for(var i=0;i<resultArr.length;i++){
        for(var j=i+1;j<resultArr.length;j++){
            if(resultArr[i]>resultArr[j]){
                resultArr[i]=resultArr[i]+resultArr[j];
                resultArr[j]=resultArr[i]-resultArr[j];
                resultArr[i]=resultArr[i]-resultArr[j];
            }
        }
    }

    return resultArr;


}

squaresOfsortedArr(inputArr)