import { baseDecor, receiveDataDecor } from '../src/Structural/Decorator';

describe('Decorator', () => {
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
  test('baseDecor', () => {
    class Test {
      @baseDecor
      add(a: number, b: number) {
        return a + b;
      }
    }
    const res = new Test().add(10, 20);
    expect(res).toBe(30);
    expect(logMock.mock.calls.length).toBe(2);
    expect(logMock.mock.calls[0][0]).toEqual('before call add');
    expect(logMock.mock.calls[1][0]).toEqual('after call add');
  });
  test('receiveDataDecor', () => {
    const callMock = jest.fn();
    class Test {
      @receiveDataDecor(1)
      add(b: number) {
        callMock(b);
        return b;
      }
    }
    const t = new Test();
    expect(t.add(1)).toBe(2);
    expect(t.add(10)).toBe(11);
    // callMock没有调用一次
    expect(callMock.mock.calls.length).toBe(0);
  });
});
