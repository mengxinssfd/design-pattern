import {
  Abstraction,
  ConcreteImplementationA,
  ConcreteImplementationB,
  ExtendedAbstraction,
} from '../src/Structural/Bridge';

describe('Bridge', () => {
  test('base', () => {
    let implementation = new ConcreteImplementationA();
    let abstraction = new Abstraction(implementation);
    console.log(abstraction.operation());

    implementation = new ConcreteImplementationB();
    abstraction = new ExtendedAbstraction(implementation);
    console.log(abstraction.operation());
  });
});
