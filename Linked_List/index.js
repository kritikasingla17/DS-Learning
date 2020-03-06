import {reverseString} from '../helper/helper';
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

    createLoop(currentNode, refferedNode) {
        var current = this.head;
        while (current !== currentNode) {
            current = current.next;
        }
        current.next = refferedNode;
    }
}
class Function {

    detectLoop(list) {
        console.log("in detect loop");
        var slow = list.head;
        var fast = list.head;
        if (slow === null)
            return false;
        while (slow.next && fast.next) {
            slow = slow.next;
            fast = fast.next.next
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    reverseList(list) {
        console.log("in reverse");
        var next = null;
        var prev = null;
        var current = list.head;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        var result={head:null};
        result.head=prev; 
        return result;
    }

    midElement(list) {
        console.log("in mid element");
        var slow = list.head;
        var fast=list.head;
        while(fast.next){
            fast=fast.next.next;
            slow=slow.next;
        }
        return slow;
    }
    checkPallindrome(list){
        var outputString="";
        var current=list.head;
        while(current){
            outputString=outputString+current.element;
            current=current.next;
        }
       var reverseStr=reverseString(outputString);
        if(reverseStr===outputString)
        return true;

        return false;
    }

}

module.exports ={
    Function,
    LinkedList
}

    ;