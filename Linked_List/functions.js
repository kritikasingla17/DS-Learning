class Function {

    detectLoop(list) {
        console.log("in detect loop");
        var slow = list.head;
        var fast = list.head;
        if(slow===null)
        return false;
        while (slow.next&& fast.next) {
            slow = slow.next;
            fast = fast.next.next
            if (slow === fast) {
                return true;
            }            
        }    
        return false;
    }

    reverseList(list){
        console.log("in reverse");
        var next=null;
        var prev=null;
        var current=list.head;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        return prev;
    }
}
module.exports = Function;