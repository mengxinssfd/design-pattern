export interface AbstractProductA {
  useFulFunctionA(): string;
}

export class ConcreteProductA1 implements AbstractProductA {
  useFulFunctionA(): string {
    return 'The result of the product A1.';
  }
}
export class ConcreteProductA2 implements AbstractProductA {
  useFulFunctionA(): string {
    return 'The result of the product A2.';
  }
}
