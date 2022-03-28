import { ConcreteClass1, ConcreteClass2 } from '../src/Behavioral/TemplateMethod';
import useMockConsoleLog from './useMockConsoleLog';

describe('TemplateMethod', () => {
  let mockLog = useMockConsoleLog((l) => (mockLog = l));
  test('base', () => {
    new ConcreteClass1().templateMethod();
    const res1 = [
      'AbstractClass says: I am doing the bulk of the work',
      'ConcreteClass1 says: Implemented Operation1',
      'AbstractClass says: But I let subclasses override some operations',
      'ConcreteClass1 says: Implemented Operation2',
      'AbstractClass says: But I am doing the bulk of the work anyway',
    ];
    expect(mockLog.mock.calls.map((i) => i[0])).toEqual(res1);

    new ConcreteClass2().templateMethod();
    const res2 = [
      'AbstractClass says: I am doing the bulk of the work',
      'ConcreteClass2 says: Implemented Operation1',
      'AbstractClass says: But I let subclasses override some operations',
      'ConcreteClass2 says: Overridden Hook1',
      'ConcreteClass2 says: Implemented Operation2',
      'AbstractClass says: But I am doing the bulk of the work anyway',
    ];
    expect(mockLog.mock.calls.map((i) => i[0])).toEqual([...res1, ...res2]);
  });
});
