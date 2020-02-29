import LinkedList from './createNode';

var linklist1=new LinkedList;
linklist1.insert(1);
linklist1.insert(2);

linklist1.giveRefToPrevNode(linklist1.head.next,linklist1.head);

var current=linklist1.head;
for(var i=0;i<4;i++){
    console.log(current);
    current=current.next;
}


