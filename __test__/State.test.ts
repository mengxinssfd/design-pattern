import useMockConsoleLog from './useMockConsoleLog';
import { ConcreteStateA, ConcreteStateB, Context } from '../src/Behavioral/State';

describe('State', () => {
  let logMock: jest.Mock;
  useMockConsoleLog((log) => (logMock = log));
  test('base', () => {
    const stateA = new ConcreteStateA();
    const c = new Context(stateA);
    // stateA
    expect(c.getState()).toBe(stateA);
    // 转成stateB
    c.request1();
    expect(c.getState() instanceof ConcreteStateB).toBeTruthy();

    // stateB.handle1
    c.request1();

    // 再次转成A
    c.request2();
    expect(c.getState() instanceof ConcreteStateA).toBeTruthy();

    // stateA.handle2
    c.request2();

    expect(logMock.mock.calls.map((i) => i[0])).toEqual([
      'ConcreteStateA handles request1.',
      'ConcreteStateA wants to change the state of the context.',

      'ConcreteStateB handles request1.',

      'ConcreteStateB handles request2.',
      'ConcreteStateB wants to change the state of the context.',

      'ConcreteStateA handles request2.',
    ]);
  });
});
