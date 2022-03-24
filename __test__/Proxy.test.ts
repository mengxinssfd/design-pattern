import useMockConsoleLog from './useMockConsoleLog';
import { Proxy, RealSubject } from '../src/Structural/Proxy';

describe('Proxy', () => {
  let logMock: jest.Mock;
  useMockConsoleLog((mock) => (logMock = mock));
  test('base', () => {
    const rs = new RealSubject();
    const proxy = new Proxy(rs);
    proxy.request();
    expect(logMock.mock.calls.length).toBe(3);
    expect(logMock.mock.calls.map((i) => i[0])).toEqual([
      'Proxy: Checking access prior to firing a real request.',
      'RealSubject: Handling request.',
      'Proxy: Logging the time of request.',
    ]);
  });
});
