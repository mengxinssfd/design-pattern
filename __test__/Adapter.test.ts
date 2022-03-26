import { Adaptee, Adapter, Target } from '../src/Structural/Adapter';

describe('Adapter', () => {
  test('base', () => {
    const target = new Target();
    console.log(target.request());

    const adaptee = new Adaptee();

    const adapter = new Adapter(adaptee);

    console.log(adapter.request());
  });
});
