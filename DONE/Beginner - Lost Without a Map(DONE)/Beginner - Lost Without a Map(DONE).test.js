const maps = require("./Beginner - Lost Without a Map(DONE)")

describe("Maps", () => {
  test("should double array elements", () => {
    expect(maps([1, 2, 3])).toEqual([2, 4, 6])
  })
  test("should double array elements", () => {
    expect(maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8])
  })
})
