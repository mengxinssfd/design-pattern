/**
 * 使用jest.fn()替换掉console.log,
 * describe里面有多少个test,回调就会调用多少次
 * describe执行完后还原console.log
 * @param callback
 */
export default function useMockConsoleLog(callback: (logMock: jest.Mock) => void) {
  // promise异步，可能要用的时候没及时调用，用回调代替
  // 而且promise只能resolve一次，callback可以调用多次
  // return new Promise((res) => {
  const originLog = console.log;
  // let logMock!: jest.Mock;

  // 测试前替换掉console.log
  beforeEach(() => {
    const logMock = jest.fn();
    console.log = logMock;
    // res(logMock);
    callback(logMock);
  });

  // 测试后还原console.log
  afterAll(() => {
    console.log = originLog;
  });
  // });
}
