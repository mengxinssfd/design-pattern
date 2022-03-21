import { AbstractProductA } from '@/Creational/AbstractFactory/Product/A';

export interface AbstractProductB {
  useFulFunctionB(): string;
  anotherUseFullFunctionB(collaborator: AbstractProductA): string;
}

export class ConcreteProductB1 implements AbstractProductB {
  anotherUseFullFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.useFulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }

  useFulFunctionB(): string {
    return 'The result of the product B1.';
  }
}
export class ConcreteProductB2 implements AbstractProductB {
  anotherUseFullFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.useFulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }

  useFulFunctionB(): string {
    return 'The result of the product B2.';
  }
}
