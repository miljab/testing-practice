class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("dividing by 0");
    } else {
      return a / b;
    }
  }

  multiply(a, b) {
    return a * b;
  }
}

export const calc = new Calculator();
