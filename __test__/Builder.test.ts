import { ConcreteBuild1, Director } from '../src/Creational/Builder';
import useMockConsoleLog from './useMockConsoleLog';

describe('Builder', () => {
  let logMock: jest.Mock;

  useMockConsoleLog((log) => (logMock = log));

  test('base', () => {
    const build1 = new ConcreteBuild1();
    const director = new Director();
    director.setBuilder(build1);

    director.buildMinimalViableProduct();
    build1.getProduct().listParts();

    director.buildFullFeaturedProduct();
    build1.getProduct().listParts();

    build1.producePartA();
    build1.producePartC();
    build1.getProduct().listParts();

    expect(logMock.mock.calls.map((i) => i[0])).toEqual([
      'Product parts PartA1',
      'Product parts PartA1, PartB1, PartC1',
      'Product parts PartA1, PartC1',
    ]);
  });
});
