const capitalize = require("./capitalize");

test("checking for capitalization", () =>{
  const wordToCaptalize = "margaret";
  expect(capitalize(wordToCaptalize)).toBe("Margaret");
});
