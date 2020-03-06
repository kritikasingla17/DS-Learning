import { reverseString,changeList2Number} from './helper';
import {LinkedList} from '../Linked_List/index'
describe("test helper functions", () => {
    test("reverseString", () => {
        var input="hello"
        var expected="olleh";
        var result=reverseString(input);
        expect(result).toEqual(expected);
    });
    test("changeList2Number",()=>{
        var list=new LinkedList();
        list.insert(3);
        list.insert(4);
        list.insert(5);
        var expected=345;
        var result=changeList2Number(list);
        expect(result).toEqual(expected);
    })
});