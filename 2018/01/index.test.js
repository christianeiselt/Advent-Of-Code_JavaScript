const { input: readInput } = require("../../lib/utils");
const fn = require("./index");

test("example 01 part1", () => {
  const input = readInput(__dirname, "./test11");
  expect(fn.part1(input)).toBe("3");
});

test("example 01 part2", () => {
  const input = readInput(__dirname, "./test21");
  expect(fn.part2(input)).toBe(0);
});
