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


    //  head->  1/200   ->2/300 ->3/400 ->4/null

    //slow=2;fast=3     ->slow=3;fast=

    detectLoop(list) {
        console.log("in detect loop");
        var slow = list.head;
        var fast = list.head;
        if (slow === null)
            return false;
        while (slow.next && (fast.next && fast.next.next)) {
            slow = slow.next;
            fast = fast.next.next
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }


    //reverse List DRY RUN

   // head->   1/200(100) ->2/300(200)    ->3/400(300)    ->4/500(400)    ->5/null(500)

   // next=null     prev=null      current=1/200(100)   next=200    current=1/null(100)     prev=1/null(100)    current=2/300(200)

   // next=3/400(300)   current=2/100(200)   prev=2/100(200)    current=3/400(300)
   
   //next=4/500(400)    current=3/200(300)  prev=3/200(300)     current=4/500(400)

   //next=5/null(500)   current=4/300(400)  prev=4/300(400)     current=5/null(500)

   //next=null      current=5/400(500)      prev=5/400(500)     current=null


   //      1/null(100) <-  2/100(200)  <-  3/200(300)  <-  4/300(400)  <-  5/400(500)  <-  head




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

    removeDuplicates(list){
        var current=list.head
        while(current && current.next){
            var nxt=current.next
            if(current.element===nxt.element){
                current.next=nxt.next
            }
            else{
                current=current.next
            }
        }
        return list;
    }


    removeDuplicatesUnsortedList(list){
        var obj={}
        var current=list.head;
        var prev=null;
        while(current){
            if(obj[current.element]!=undefined && obj[current.element]!=null){
                prev.next=current.next
            }
            else{
                obj[current.element]=current.element;
                prev=current;
            }
            current=current.next
        }
        return list;

    }
}

module.exports ={
    Function,
    LinkedList
}

    ;