function reverseString(str){
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
function changeList2Number(list){
    var current=list.head;
    var number=0;
    while(current){
        number=number*10+current.element;
        current=current.next;
    }
    return number
}

module.exports={
    reverseString,
    changeList2Number
}