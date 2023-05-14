const past = require("./Beginner Series #2 Clock(DONE)")

describe("Time in miliseconds", () => {
  test("should return time in miliseconds", () => {
    expect(past(0, 0, 0)).toEqual(0)
  })
  test("should return time in miliseconds", () => {
    expect(past(0, 1, 1)).toBe(61000)
  })
  test("should return time in miliseconds", () => {
    expect(past(1, 0, 1)).toBe(3601000)
  })
  test("should return time in miliseconds", () => {
    expect(past(1, 1, 1)).toBe(3661000)
  })
})
