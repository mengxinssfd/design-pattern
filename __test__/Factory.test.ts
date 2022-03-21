import * as Fac from '../src/Creational/Factory';

test('Factory', () => {
  function getRes(num) {
    return `Creator: The same creators code has just worked with {Result of the ConcreteProduct${num}}`;
  }
  const ins1 = new Fac.ConcreteCreator1();
  const ins2 = new Fac.ConcreteCreator2();
  const ins3 = new Fac.ConcreteCreator3();

  expect(ins1.someOperation()).toBe(getRes(1));
  expect(ins2.someOperation()).toBe(getRes(2));
  expect(ins3.someOperation()).toBe(getRes(3));
});
