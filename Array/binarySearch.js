//Binary Search


var arr=[ 2, 3, 4,7,9, 10, 40 ];
var search=9;

function BinarySearch(arr,firstIndex,lastIndex){
    
    var midIndex=(firstIndex+lastIndex)/2;
   
    if(arr[midIndex]===search){
        return midIndex;
    }

    if(arr[midIndex]>search){
      return BinarySearch(arr,firstIndex,midIndex-1)
    }

    if(arr[midIndex]<search){
      return BinarySearch(arr,midIndex+1,lastIndex);
      
    }

}

console.log(BinarySearch(arr,0,arr.length-1));

//Complexity= Worst Case O(log(n))  Best Case omega(1)  Average Case Theta(log(n)