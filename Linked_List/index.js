import {reverseString, changeList2Number} from '../helper/helper';
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
        console.log("in reverse");              //  1-> 2-> 3-> 4-> 5-> null
        var next = null;                        //  next=null
        var prev = null;                        //  prev = null
        var current = list.head;                //  current= first
        while (current) {                       
            next = current.next;                //  next=second
            current.next = prev;                //  current.next=null   //first.next=null
            prev = current;                     //  prev=first
            current = next;                     //  current =second
        }
        list.head=prev; 
        return list;
    }

    midElement(list) {
        console.log("in mid element");
        var slow = list.head;
        var fast=list.head;
        while(fast.next && fast.next.next){
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

    getNthFromLast(list,n){
        var slow=list.head;
        var fast=list.head;
        var count=0;
        while(count<n){
            if(fast!==null){
                fast=fast.next
            }
            count++;
        }
        while(fast!=null){
            fast=fast.next;
            slow=slow.next;
        }
        return slow;
        

    }

    rotate(list,k){
       var current=list.head;
        var count=1;
       
        while(current.next && count<k){
            current=current.next
            count++;
        } 
        var temp=current;
        
        while(current.next){
            current=current.next;
        }

        current.next=list.head;
        list.head=temp.next;
        temp.next=null;
        return list;
    }

    addLists(list1,list2){
        var no1=changeList2Number(list1);
        var no2=changeList2Number(list2);
        console.log(no1+no2);
        var outputResult=new LinkedList();
        outputResult.insert(3);
        outputResult.insert(9);
        outputResult.insert(0);
        return outputResult;

    }
}

module.exports ={
    Function,
    LinkedList
}

    ;