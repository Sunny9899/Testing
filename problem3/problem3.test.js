const { test, expect } = require("@jest/globals");
const {sbmt} =require("./problem3.js");
const {calculate} =require("./problem3.js");

test("test1",()=>{
    expect(sbmt(240000,100000)).toBe(0);
});

test("test2",()=>{
    expect(sbmt(278000,80000)).toBe(0);
});

test("test3",()=>{
    expect(sbmt(490000,300000)).toBe(44000);
});

test("test4",()=>{
    expect(sbmt(700000,100000)).toBe(134000);
});

test("test5",()=>{
    expect(sbmt(1000000,400000)).toBe(192000);
});

test("test6",()=>{
    expect(sbmt(1500000,400000)).toBe(438000);
});

test("test7",()=>{
    expect(sbmt(550000,80000)).toBe(105200);
});

test("test8",()=>{
    expect(sbmt(250000,0)).toBe(25000);
});