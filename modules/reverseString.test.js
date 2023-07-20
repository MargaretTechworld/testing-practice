const reverseString = require("./reverseString");
describe("reverseString function", () =>{
  //test 1
  test("reversing a given string" , () => {
    expect(reverseString("Margaret")).toBe("teragraM");
    });
// test 2
 test("reversing a given string" , () => {
  expect(reverseString("Margaret, is my name")).toBe("eman ym si ,teragraM");
  });
})
