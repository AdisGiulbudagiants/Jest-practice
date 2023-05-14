const sumEvenNumbers = require("./Sum even numbers(DONE)")

describe("sumEvenNumbers", () => {
  test("should return Sum of Even Numbers", () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual(12)
  })
})
