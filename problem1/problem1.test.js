const { test, expect } = require("@jest/globals");
const {sbmt} =require("./problem1.js");

test("test1",()=>{
    expect(sbmt(5200)).toBe(5+"second");
});

test("test2",()=>{
    expect(sbmt(60000)).toBe(1+"minute");
});

test("test3",()=>{
    expect(sbmt(180000)).toBe(3+"minute");
});

test("test4",()=>{
    expect(sbmt(200000)).toBe(3+"minute"+" "+20+"second");
});

test("test5",()=>{
    expect(sbmt(3600000)).toBe(1+"hour");
});

test("test6",()=>{
    expect(sbmt(3660000)).toBe(1+"hour"+" "+1+"minute");
});

test("test7",()=>{
    expect(sbmt(3690000)).toBe(1+"hour"+" "+1+"minute"+" "+30+"second");
});

test("test7",()=>{
    expect(sbmt(3659000)).toBe(1+"hour"+" "+0+"minute"+" "+59+"second");
});