import { calc } from "./calculator";

it("add two positives", () => expect(calc.add(2, 3)).toBe(5));

it("add two negatives", () => expect(calc.add(-2, -5)).toBe(-7));

it("subtract two positives", () => expect(calc.subtract(2, 3)).toBe(-1));

it("subtract two negatives", () => expect(calc.subtract(-1, -3)).toBe(2));

it("divide", () => expect(calc.divide(2, 4)).toBe(0.5));

it("divide by 0", () =>
  expect(() => calc.divide(2, 0)).toThrow("dividing by 0"));

it("multiply two positives", () => expect(calc.multiply(2, 4)).toBe(8));

it("multiply two negatives", () => expect(calc.multiply(-3, -10)).toBe(30));

it("multiply one positive and one negative", () =>
  expect(calc.multiply(5, -3.1)).toBe(-15.5));
