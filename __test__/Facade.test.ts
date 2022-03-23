import { Facade } from '../src/Structural/Facade/Facade';

test('Facade', () => {
  const facade = new Facade();
  const res = facade.operation();
  expect(res).toEqual(
    [
      'Facade initializes subsystems:\n',
      'Subsystem1: Ready!\n',
      'Subsystem2: Ready!\n',
      'Facade orders subsystems to perform the action:\n',
      'Subsystem1: Go!\n',
      'Subsystem2: Go!\n',
    ].join(''),
  );
});
