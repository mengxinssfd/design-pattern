import { Invoker, Receiver } from '../src/Behavioral/Command/other';
import { ComplexCommand, SimpleCommand } from '../src/Behavioral/Command/commands';
import useMockConsoleLog from './useMockConsoleLog';

describe('Command', () => {
  let mockLog = useMockConsoleLog((l) => (mockLog = l));
  test('base', () => {
    const invoker = new Invoker();
    invoker.setOnStart(new SimpleCommand('Say Hi!'));
    const receiver = new Receiver();
    invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));
    invoker.doSomethingImportant();

    expect(mockLog.mock.calls.map((i) => i[0])).toEqual([
      'Invoker: Does anybody want something done before I begin?',
      'SimpleCommand: See, I can do simple things like printing (Say Hi!)',
      'Invoker: ...doing something really important...',
      'Invoker: Does anybody want something done after I finish?',
      // receiver
      'ComplexCommand: Complex stuff should be done by a receiver object.',
      'Receiver: Working on (Send email.)',
      'Receiver: Also working on (Save report.)',
    ]);
  });
});
