export interface Memento {
  getState(): string;
  getName(): string;
  getDate(): string;
}
export class Originator {
  constructor(private state: string) {
    console.log(`Originator: My initial state is: ${state}`);
  }
  doSomething() {
    console.log("Originator: I'm doing something important.");
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }
  generateRandomString(length = 0): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // eslint-disable-next-line prefer-spread
    return Array.apply(null, { length } as undefined[])
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');
  }
  save(): Memento {
    return new ConcreteMemento(this.state);
  }
  restore(memento: Memento) {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}

export class ConcreteMemento implements Memento {
  private readonly date: string;
  constructor(private state: string) {
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }
  getDate(): string {
    return this.date;
  }
  getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }
  getState(): string {
    return this.state;
  }
}

export class Caretaker {
  private mementos: Memento[] = [];
  constructor(private originator: Originator) {}
  backup() {
    console.log("Caretaker: Saving Originator's state...");
    this.mementos.push(this.originator.save());
  }
  undo() {
    if (!this.mementos.length) return;
    const memento = this.mementos.pop() as Memento;
    console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
    this.originator.restore(memento);
  }
  showHistory() {
    console.log("Caretaker: Here's the list of mementos:");
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}
