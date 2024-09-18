import { capitalize } from "./capitalize";

it("lowercase string", () => expect(capitalize("abc")).toBe("Abc"));

it("numbers", () => expect(capitalize("123")).toBe("123"));

it("upper and lowercase string", () =>
  expect(capitalize("aaBadCa")).toBe("AaBadCa"));

it("uppercase string", () => expect(capitalize("AAAA")).toBe("AAAA"));

it("full sentence", () =>
  expect(
    capitalize("lorem ipsum dolor sit amet, consectetur adipiscing elit.")
  ).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit."));
