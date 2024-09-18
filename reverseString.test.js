import { reverseString } from "./reverseString";

it("no whitespace string", () => expect(reverseString("abc")).toBe("cba"));

it("uppercase string", () => expect(reverseString("ABCD")).toBe("DCBA"));

it("numbers string", () => expect(reverseString("1234")).toBe("4321"));

it("full sentence", () =>
  expect(reverseString("Lorem ipsum dolor.")).toBe(".rolod muspi meroL"));
