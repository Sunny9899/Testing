//npm init
//npm install --save-dev jest
//npm run test  

const { test, expect } = require("@jest/globals");
const {sbmt} =require("./problem5.js");

test("test1",()=>{
    expect(sbmt("dG@f2")).toBe("Password Length too Short");
});

test("test2",()=>{
    expect(sbmt("fghtyru")).toBe("Include Number","Include Capital Letter","Include Symbol");
});

test("test3",()=>{
    expect(sbmt("eyTW%$^")).toBe("Include Number");
});

test("test4",()=>{
    expect(sbmt("1we$etfb")).toBe("Include Capital Letter");
});

test("test5",()=>{
    expect(sbmt("1WE$ETFB")).toBe("Include Small Letter");
});

test("test6",()=>{
    expect(sbmt("WErty234")).toBe("Include Symbol");
});

test("test7",()=>{
    expect(sbmt("56891236")).toBe("Include Capital Letter","Include Small Letter","Include Symbol");
});

test("test8",()=>{
    expect(sbmt("RHUKJRBFHJH")).toBe("Include Number","Include Small Letter","Include Symbol");
});

test("test9",()=>{
    expect(sbmt("^&#&&()%^%$$")).toBe("Include Number","Include Capital Letter","Include Small Letter");
});

test("test10",()=>{
    expect(sbmt("W-F2H45Y56t78beJ$gtdfv%n97t#")).toBe("Password Valid");
});
