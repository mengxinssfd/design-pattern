type State = string;
export interface Memento {
  getState(): State;
  getDate(): string;
}
export class Originator {
  constructor(private state: State) {
    console.log(`初试状态为:${this.state}`);
  }
  // 代替doSomething
  input(value: string) {
    console.log(`输入状态：${value}`);
    this.state = value;
  }
  inputPad(value: string) {
    this.input(this.state + value);
  }
  save(): Memento {
    console.log(`保存输入状态:${this.state}`);
    return new ConcreteMemento(this.state);
  }
  restore(memento: Memento) {
    this.state = memento.getState();
    console.log(`恢复输入状态：${this.state}`);
  }
  isSameState(memento: Memento) {
    if (!memento) return false;
    return memento.getState() === this.state;
  }
}

export class ConcreteMemento implements Memento {
  private readonly date: string;
  constructor(private state: State) {
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  getDate(): string {
    return this.date;
  }

  getState(): State {
    return this.state;
  }
}

export class Caretaker {
  private readonly mementos: Memento[] = [];
  private position = 0;

  constructor(private originator: Originator) {
    console.log('自动备份第一次状态');
    this.backup();
  }

  backup() {
    console.log('备份状态');
    if (this.originator.isSameState(this.mementos[this.position])) {
      this.position++;
      console.log('相同的状态，无需再次备份');
      return;
    }
    this.mementos.splice(this.position++, this.mementos.length, this.originator.save());
  }
  undo() {
    if (this.position < 1) {
      console.log(`没有更多备份记录了`);
      return;
    }
    console.log(`撤回`);
    this.originator.restore(this.mementos[--this.position]);
  }
  showHistory(): Array<{ state: State; date: string }> {
    return this.mementos.map((m) => ({ state: m.getState(), date: m.getDate() }));
  }
}