export class Context {
  constructor(private state: State) {
    this.transitionTo(state);
  }
  transitionTo(state: State) {
    this.state = state;
    state.setContext(this);
  }
  request1() {
    this.state.handle1();
  }
  request2() {
    this.state.handle2();
  }
  getState(): State {
    return this.state;
  }
}

export abstract class State {
  constructor(protected context: Context | null = null) {}
  setContext(context: Context) {
    this.context = context;
  }
  abstract handle1();
  abstract handle2();
}

export class ConcreteStateA extends State {
  handle1() {
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context.');
    this.context?.transitionTo(new ConcreteStateB());
  }

  handle2() {
    console.log('ConcreteStateA handles request2.');
  }
}

export class ConcreteStateB extends State {
  handle1() {
    console.log('ConcreteStateB handles request1.');
  }

  handle2() {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
    this.context?.transitionTo(new ConcreteStateA());
  }
}
