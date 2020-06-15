// Reverse A given Array

var arr=[ 1,2,3,4,5,6];
var len=arr.length;


function ReverseArr(arr,i,j){
    if(i>=j){
        return arr;
    }
    var temp;
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
   return ReverseArr(arr,i+1,j-1);

}

console.log(ReverseArr(arr,0,len-1));

// Complexity O(n)