const Calculate = require("./calculator")
describe("calculator function", ()=>{
const calculator = new Calculate(5,6)

test("add two numbers", ()=>{
  expect(calculator.add()).toEqual(11);
});

test("substract two numbers", ()=>{
  expect(calculator.substract()).toEqual(-1);
});

test("multiply two numbers", ()=>{
  expect(calculator.multiply()).toEqual(30);
});

test("divide two numbers", ()=>{
  expect(calculator.divide()).toEqual(0.8333333333333334);
});
})