const stringToNumber = require("./StringToNumber")

describe("Name of the group", () => {
  test("stringToNumber should convert string to number 2", () => {
    expect(stringToNumber("1234")).toBe(1234)
    expect(stringToNumber("-12")).toBe(-12)
  })
  test("stringToNumber should convert string to number 2", () => {
    expect(stringToNumber("3.4")).toBe(3.4)
    expect(stringToNumber("15000")).toBe(15000)
  })
})
