import { Function, LinkedList } from ".";
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

  test("create a loop in linkedlist", () => {
    var list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    var list1 = list.head;
    for (var i = 1; i < 4; i++) {
      list1 = list1.next;

      if (i === 2) {
        var ref = list1;
      }
      if (i == 3) {
        var curr = list1;
      }
    }

    list.createLoop(curr, ref);
    var result = functions.detectLoop(list);
    expect(result).toEqual(true);
  });

  test("reverse link list", () => {
    var list = new LinkedList();
    var outputList = new LinkedList();
    var resultList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
  resultList= functions.reverseList(list);
    var outputList = new LinkedList();
    outputList.insert(3);
    outputList.insert(2);
    outputList.insert(1);
    expect(resultList).toEqual(outputList);
  });


  test("detect loop",()=>{
    var list=new LinkedList();
    var output=false;
    var result;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    result=functions.detectLoop(list);
    expect(result).toEqual(output)
  })

  test("find mid element of list for odd no. of elements", () => {
    var list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    var result = functions.midElement(list);
    const output = {
      element: 3,
      next: {
        element: 4,
        next: {
          element: 5,
          next: null
        }
      }
    };
    expect(result).toEqual(output);
  });

  test("find mid element of list for even no. of elements", () => {
    var list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    var result = functions.midElement(list);
    const output = {
      element: 2,
      next: {
        element: 3,
        next: {
          element: 4,
          next: null
        }
      }
    };
    expect(result).toEqual(output);
  });

  test("check list is pallindrome", () => {
    console.log("in checkpallindrome");
    var list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    var result = functions.checkPallindrome(list);
    expect(result).toEqual(true);
  });

  test("get Nth element from last", () => {
    console.log("get nth element from last");
    var list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    var result = functions.getNthFromLast(list, 4);
    expect(result.element).toEqual(2);
  });
  test("rotate a linked list counter clockwise by k", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    let k = 3;
    var newList = functions.rotate(list, k);
    var expectedList = new LinkedList();
    expectedList.insert(4);
    expectedList.insert(5);
    expectedList.insert(1);
    expectedList.insert(2);
    expectedList.insert(3);
    expect(newList).toEqual(expectedList);
  });

  test("add 2 no represented by list", () => {
    var no1 = new LinkedList();
    var no2 = new LinkedList();
    var outputResult = new LinkedList();
    no1.insert(4);
    no1.insert(5);
    no2.insert(3);
    no2.insert(4);
    no2.insert(5);
    outputResult.insert(3);
    outputResult.insert(9);
    outputResult.insert(0);
    var result = functions.addLists(no1, no2);
    expect(result).toEqual(outputResult);
  });

  test("remove duplicates from a sorted list",()=>{

    console.log("in remove duplicates");

    var input=new LinkedList();
    var output=new LinkedList();

    output.insert(1);
    output.insert(2);
    output.insert(3);

    input.insert(1);
    input.insert(1);
    input.insert(1);
    input.insert(2);
    input.insert(2);
    input.insert(3);
    input.insert(3);
   
    var result=functions.removeDuplicates(input);
    expect(result).toEqual(output);
        


  })
  test("remove duplicates from a list",()=>{

    console.log("in remove duplicates from non sorted list");

    var input=new LinkedList();
    var output=new LinkedList();

    output.insert(51);
    output.insert(5);
    output.insert(2);
    output.insert(3);
    output.insert(6);

    input.insert(51);
    input.insert(5);
    input.insert(2);
    input.insert(3);
    input.insert(2);
    input.insert(6);
    input.insert(51);
   
    var result=functions.removeDuplicatesUnsortedList(input);
    expect(result).toEqual(output);
        
  })
});
