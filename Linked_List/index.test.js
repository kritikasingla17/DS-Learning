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

    test("reverse link list", () => {
        var list = new LinkedList();
        var outputList = new LinkedList();

        list.insert(1);
        list.insert(2);
        list.insert(3);
        outputList = functions.reverseList(list);
        const output = {
            head: {
                element: 3,
                next: {
                    element: 2,
                    next: {
                        element: 1,
                        next: null
                    }
                }
            }
        }
        expect(outputList).toEqual(output);

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

    test ("get Nth element from last",()=>{
        console.log("get nth element from last");
        var list=new LinkedList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        list.insert(5);
        var result=functions.getNthFromLast(list,4);
        expect(result.element).toEqual(2);
    })
})
