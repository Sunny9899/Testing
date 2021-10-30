//npm init
//npm install --save-dev jest
//npm run test  

const { test, expect } = require("@jest/globals");

test("test1:passed",()=>{
    expect( {} ).toEqual( {} );
});

test("test2:passed",()=>{
    expect( [] ).toEqual( [] )
});

test("test3:passed",()=>{
    expect( { a: 1, b: 2 } ).toEqual( { a:1 , b:2 } )
});

test("test4:passed",()=>{
    expect( [ 1, 2, 3 ] ).toEqual( [ 1, 2, 3 ] )
});

test("test5:passed",()=>{
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { c: 1, d: 2 }} )
});

test("test6:passed",()=>{
    expect( [ 1, 2, [ 1, 2 ] ] ).toEqual( [ 1, 2, [ 1, 2 ]  ] )
});

test("test7:failed",()=>{
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { e: 1, d: 2 }} ) 
});

test("test8:failed",()=>{
    expect( [ 1, 2, [ 1, 3] ] ).toEqual( [ 1, 2, [ 1, 2]  ] )
});