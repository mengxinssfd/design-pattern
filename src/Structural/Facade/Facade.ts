import { Subsystem1, Subsystem2 } from './Subsystem';

export class Facade {
  constructor(
    protected subsystem1: Subsystem1 = new Subsystem1(),
    protected subsystem2: Subsystem2 = new Subsystem2(),
  ) {}
  operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();
    return result;
  }
}
