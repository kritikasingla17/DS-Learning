// Search an element in sorted and rotated array 
//  input[3,4,5,1,2] element=5



function findElement(arr,element){
    if(arr[0]>element){
        for(var i=arr.length-1;i>0;i--){
            if(arr[i]===element)
            return i;
        }
    }
    else{
        for(var i=0;i<arr.length;i++){
            if(arr[i]===element)
            return i;
        }
    }

}

console.log(findElement([3,4,5,1,2],4))