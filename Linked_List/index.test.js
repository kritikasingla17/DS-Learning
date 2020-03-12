import { Function, LinkedList } from '.';
var functions = new Function();
describe("test linked list function", () => {
    test("insert a node", () => {
        var list = new LinkedList();
        list.insert(1);
        const output = {
            head: {
                element: 1,
                next: null
            }
        };

        expect(list).toEqual(output);
    });

    test("create a loop in linkedlist",()=>{
        var list=new LinkedList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        var list1=list.head;
        for(var i=1;i<4;i++){
            list1=list1.next;

            if(i===2){
                var ref=list1;
            }
            if(i==3){
                var curr=list1;
            }
        }
        
        list.createLoop(curr,ref);
        var result=functions.detectLoop(list);
        expect(result).toEqual(true);
    })

    test("reverse link list", () => {
        var list = new LinkedList();
        var outputList = new LinkedList();

        list.insert(1);
        list.insert(2);
        list.insert(3);
        outputList = functions.reverseList(list);
        var outputList=new LinkedList();
        outputList.insert(3);
        outputList.insert(2);
        outputList.insert(1);
        expect(outputList).toEqual(outputList);

    })
   

    test("find mid element of list", () => {
        var list = new LinkedList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        list.insert(5);
        var result=functions.midElement(list);
        const output={
            element:3,
            next:{
                element:4,
                next:{
                    element:5,
                    next:null
                }
            }
        }
        expect(result).toEqual(output);
    })


    test("check list is pallindrome",()=>{
        console.log("in checkpallindrome");
        var list=new LinkedList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(2);
        list.insert(1);
        var result=functions.checkPallindrome(list);
        expect(result).toEqual(true);
    })

    test("rotate a linked list counter clockwise by k",()=>{
        let list=new LinkedList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        list.insert(5);
        let k=3;
        var newList=functions.rotate(list,k);
        var expectedList=new LinkedList();
        expectedList.insert(4);
        expectedList.insert(5);
        expectedList.insert(1);
        expectedList.insert(2);
        expectedList.insert(3);
        expect(newList).toEqual(expectedList);
    })
})
