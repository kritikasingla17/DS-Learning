class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    insert(element) {
        var node = new Node(element);
        var current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    giveRefToPrevNode(currentNode,refferedNode){
        var current=this.head;
        while(current!==currentNode){
            current=current.next;
        }
        current.next=refferedNode;
    }
}

module.exports = LinkedList;