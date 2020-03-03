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

    midElement(list){
        console.log("in mid element");
        var current=list.head;
        let size=0;
        while(current){
            size++;
            current=current.next;
        }
        current=list.head;
        for(var i=1;i<size/2;i++){
            current=current.next;
        }
        return current;
    }
   
}
module.exports = Function;