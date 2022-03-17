// 面向对象写法

interface CalcStrategy {
  calc(num1: number, num2: number): number;
}

export class PlusStrategy implements CalcStrategy {
  calc(num1: number, num2: number): number {
    return num1 + num2;
  }
}
export class MinusStrategy implements CalcStrategy {
  calc(num1: number, num2: number): number {
    return num1 - num2;
  }
}
export class TimesStrategy implements CalcStrategy {
  calc(num1: number, num2: number): number {
    return num1 * num2;
  }
}
export class DivStrategy implements CalcStrategy {
  calc(num1: number, num2: number): number {
    return num1 / num2;
  }
}

export class CalcContext {
  constructor(private strategy: CalcStrategy) {}
  setStrategy(strategy: CalcStrategy) {
    this.strategy = strategy;
  }
  doCalc(num1: number, num2: number) {
    return this.strategy.calc(num1, num2);
  }
}
