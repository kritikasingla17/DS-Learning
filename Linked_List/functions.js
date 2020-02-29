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
}
module.exports = Function;