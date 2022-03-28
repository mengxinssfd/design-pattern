import { Receiver } from '@/Behavioral/Command/other';

export interface Command {
  execute();
}

// 简单命令
export class SimpleCommand implements Command {
  constructor(private payload: string) {}
  execute() {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

// 复杂命令
export class ComplexCommand implements Command {
  constructor(private receiver: Receiver, private a: string, private b: string) {}
  execute() {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}
