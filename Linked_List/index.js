import LinkedList from './createNode';
import Function from './functions'

var linklist1=new LinkedList;
var functions=new Function;
linklist1.insert(1);
linklist1.insert(2);
linklist1.insert(3);
linklist1.insert(4);
linklist1.insert(5);
linklist1.insert(6);



var toRef=linklist1.head;
for(var i=0;i<4;i++){
    toRef=toRef.next;
}
// linklist1.giveRefToPrevNode(toRef,linklist1.head.next);

var current=linklist1.head;
for(var i=0;i<3;i++){
    // console.log(current);
    current=current.next;
}

// console.log(functions.detectLoop(linklist1));
console.log(functions.midElement(linklist1));


