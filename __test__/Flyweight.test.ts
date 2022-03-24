import useMockConsoleLog from './useMockConsoleLog';
import { FlyweightFactory } from '../src/Structural/Flyweight';
type Tuple<T, N extends number, R extends unknown[] = []> = R['length'] extends N
  ? R
  : Tuple<T, N, [T, ...R]>;

describe('Flyweight', () => {
  let mockLog: jest.Mock;
  useMockConsoleLog((fn) => {
    mockLog = fn;
  });
  test('Flyweight', () => {
    const init: Array<Tuple<string, 3>> = [
      ['Chevrolet', 'Camaro2018', 'pink'],
      ['Mercedes Benz', 'C300', 'black'],
      ['Mercedes Benz', 'C500', 'red'],
      ['BMW', 'M5', 'red'],
      ['BMW', 'X6', 'white'],
    ];
    const factory = new FlyweightFactory(init);

    type RestParam = Tuple<string, 5>;
    function addCarToPoliceDatabase(
      ff: FlyweightFactory,
      ...[plates, owner, brand, model, color]: RestParam
    ) {
      const flyweight = ff.getFlyweight([brand, model, color]);
      flyweight.operation([plates, owner]);
    }
    // factory.listFlyweights();

    const param1: RestParam = ['CL234IR', 'James Doe', ...init[3]];
    const param2: RestParam = ['CL234IR', 'James Doe', 'BMW', 'X1', 'red'];
    addCarToPoliceDatabase(factory, ...param1);
    addCarToPoliceDatabase(factory, ...param2);
    expect(mockLog.mock.calls.map((i) => i[0])).toEqual([
      'reusing existing flyweight',
      `Flyweight: Displaying shared (${JSON.stringify(
        param1.slice(2),
      )}) and unique (${JSON.stringify(param1.slice(0, 2))}) state.`,
      'creating new one',
      `Flyweight: Displaying shared (${JSON.stringify(
        param2.slice(2),
      )}) and unique (${JSON.stringify(param2.slice(0, 2))}) state.`,
    ]);
  });
});
