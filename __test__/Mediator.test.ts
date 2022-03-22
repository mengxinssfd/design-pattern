import { Component1, Component2 } from '../src/Behavioral/Mediator/components';
import { ConcreteMediator } from '../src/Behavioral/Mediator';

describe('Mediator', () => {
  const originLog = console.log;
  let logMock: jest.Mock;
  // 测试前替换掉console.log
  beforeAll(() => {
    logMock = jest.fn();
    console.log = logMock;
  });
  // 测试后还原console.log
  afterAll(() => {
    console.log = originLog;
  });

  test('test', () => {
    const c1 = new Component1();
    const c2 = new Component2();
    new ConcreteMediator(c1, c2);

    c1.doA();
    c2.doD();

    expect(logMock.mock.calls.map((i) => i[0])).toEqual([
      "Component 1 does A.",
      "Component 2 does C.",
      "Component 2 does D.",
      "Component 1 does B.",
      "Component 2 does C.",
    ]);
  });
});
