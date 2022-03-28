import { Command } from '@/Behavioral/Command/commands';

export class Receiver {
  doSomething(a: string) {
    console.log(`Receiver: Working on (${a}.)`);
  }
  doSomethingElse(b: string) {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

// 调用者
export class Invoker {
  private onStart!: Command;
  private onFinish!: Command;

  setOnStart(command: Command) {
    this.onStart = command;
  }
  setOnFinish(command: Command) {
    this.onFinish = command;
  }

  private isCommand(v: any): v is Command {
    return v?.execute !== undefined;
  }

  doSomethingImportant() {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }
    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }
}
