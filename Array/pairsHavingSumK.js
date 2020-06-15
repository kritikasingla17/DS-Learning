// No. of Pairs In An Array having sum K

var arr=[1,2,3,4,5,6];
const sum=6;
var noOfPairs=0;

function findPair(arr,diff,index){
    if(index===arr.length){
        return 0;
    }
    if(diff===arr[index]){
        noOfPairs++;
    }
    findPair(arr,diff,index+1);
}

for(var i=0;i<arr.length;i++){
    var diff;
    diff=sum-arr[i];
    findPair(arr,diff,i+1)
}

console.log(noOfPairs);

//Complexity O(n^2)

// Optimal way is to sort the array and use two pointers       ->       Complexity  O(nlogn)