import {ConcreteProductA1, ConcreteProductA2} from '@/Creational/AbstractFactory/Product/A';
import {ConcreteProductB1, ConcreteProductB2} from '@/Creational/AbstractFactory/Product/B';
import { ConcreteFactory1, ConcreteFactory2 } from '@/Creational/AbstractFactory/Factory';

test('AbstractFactory', () => {
  const f1 = new ConcreteFactory1();
  const f2 = new ConcreteFactory2();

  const pa1 = f1.createProductA();
  expect(pa1 instanceof ConcreteProductA1).toBeTruthy();
  const pb1 = f1.createProductB();
  expect(pb1 instanceof ConcreteProductB1).toBeTruthy();

  const pa2 = f2.createProductA();
  expect(pa2 instanceof ConcreteProductA2).toBeTruthy();
  const pb2 = f2.createProductB();
  expect(pb2 instanceof ConcreteProductB2).toBeTruthy();
});
