//npm init
//npm install --save-dev jest
//npm run test  

const { test, expect } = require("@jest/globals");
const {sum} =require("./problem6.js");

test("test1",()=>{
    expect(sum([[1,2,3,4],[5,6,7,8],[9,0,2,-7]],3,4)).toBe(40);
});

test("test2",()=>{
    expect(sum([[1,"9",3,4],[5,6,7,8],[9,0,2,-7]],3,4)).toBe("Input Invalid");
});

test("test3",()=>{
    expect(sum([[1,4],[5,6]],2,2)).toBe(16);
});

test("test4",()=>{
    expect(sum([[0,-3,-4],[5,6,8],[9,0,-7]],3,3)).toBe(14);
});

test("test5",()=>{
    expect(sum([[1,"{","&","4"]],1,4)).toBe("Input Invalid");
});

test("test6",()=>{
    expect(sum([[1,9,""," "],[5,6,7,8],[9,0,2,-7]],3,4)).toBe("Input Invalid");
});

test("test7",()=>{
    expect(sum([[-1,-4],[-5,-6]],2,2)).toBe(-16);
});

test("test8",()=>{
    expect(sum([[0,-3,-4],[5,6,8]],2,3)).toBe(12);
});