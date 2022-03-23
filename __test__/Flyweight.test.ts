import useMockConsoleLog from './useMockConsoleLog';
import { FlyweightFactory } from '../src/Structural/Flyweight';
type Tuple<T, N extends number, R extends unknown[] = []> =
  N extends N
    ? number extends N
      ? T[]
      : R['length'] extends N ? R : Tuple<T, N, [T, ...R]>
    : never;

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

    function addCarToPoliceDatabase(
      ff: FlyweightFactory,
      plates: string,
      owner: string,
      brand: string,
      model: string,
      color: string,
    ) {
      const flyweight = ff.getFlyweight([brand, model, color]);
      flyweight.operation([plates, owner]);
    }
    // factory.listFlyweights();
    type Rest = Tuple<string, 5>;
    const list: Rest = ['CL234IR', 'James Doe', ...init[3]];
    const list2: Rest = ['CL234IR', 'James Doe', 'BMW', 'X1', 'red'];
    addCarToPoliceDatabase(factory, ...list);
    addCarToPoliceDatabase(factory, ...list2);
    expect(mockLog.mock.calls.map((i) => i[0])).toEqual([
      'reusing existing flyweight',
      `Flyweight: Displaying shared (${JSON.stringify(list.slice(2))}) and unique (${JSON.stringify(
        list.slice(0, 2),
      )}) state.`,
      'creating new one',
      `Flyweight: Displaying shared (${JSON.stringify(
        list2.slice(2),
      )}) and unique (${JSON.stringify(list2.slice(0, 2))}) state.`,
    ]);
  });
});
