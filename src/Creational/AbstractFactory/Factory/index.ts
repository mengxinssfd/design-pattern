import {
  AbstractProductA,
  ConcreteProductA1,
  ConcreteProductA2,
} from '@/Creational/AbstractFactory/Product/A';
import {
  AbstractProductB,
  ConcreteProductB1,
  ConcreteProductB2,
} from '@/Creational/AbstractFactory/Product/B';

interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

export class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
export class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
