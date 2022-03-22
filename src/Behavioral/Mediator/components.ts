import { Mediator } from '@/Behavioral/Mediator/index';

export class BaseComponents {
  constructor(protected mediator: Mediator | null = null) {}
  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

export class Component1 extends BaseComponents {
  doA() {
    console.log('Component 1 does A.');
    this.mediator?.modify(this, 'A');
  }
  doB() {
    console.log('Component 1 does B.');
    this.mediator?.modify(this, 'B');
  }
}
export class Component2 extends BaseComponents {
  doC() {
    console.log('Component 2 does C.');
    this.mediator?.modify(this, 'C');
  }
  doD() {
    console.log('Component 2 does D.');
    this.mediator?.modify(this, 'D');
  }
}
