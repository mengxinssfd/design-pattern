import useMockConsoleLog from './useMockConsoleLog';
describe('useMockConsoleLog', () => {
  let mockLog = useMockConsoleLog((l) => (mockLog = l));
  test('mockLog 1', () => {
    expect(console.log).toBe(mockLog); // true
    console.log(1);
    expect(mockLog.mock.calls.length).toBe(1);
  });
  test('mockLog 0', () => {
    expect(mockLog.mock.calls.length).toBe(0);
  });
  console.log(mockLog === console.log); // false
});
