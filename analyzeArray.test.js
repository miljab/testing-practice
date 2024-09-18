import { analyzeArray } from "./analyzeArray";

it("array test 1", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));

it("array test 2", () =>
  expect(analyzeArray([-20, 1, 3, 0])).toStrictEqual({
    average: -4,
    min: -20,
    max: 3,
    length: 4,
  }));

it("array test 3", () =>
  expect(analyzeArray([0])).toStrictEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  }));
