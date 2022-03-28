import { Caretaker, Originator } from '../src/Behavioral/Memento';
import * as IH from '../src/Behavioral/Memento/InputHistory';
import useMockConsoleLog from './useMockConsoleLog';

describe('Memento', () => {
  let mockLog = useMockConsoleLog((l) => (mockLog = l));
  test('base', () => {
    const originator = new Originator('start');
    const caretaker = new Caretaker(originator);

    caretaker.backup();
    originator.doSomething();

    caretaker.backup();
    originator.doSomething();

    caretaker.backup();
    originator.doSomething();

    caretaker.showHistory();

    caretaker.undo();
    caretaker.undo();
  });
  test('InputOriginator', () => {
    const io = new IH.Originator('');
    const caretaker = new IH.Caretaker(io);

    io.input('今天天气');
    caretaker.backup();

    io.input('今天天气不好。');
    caretaker.backup();
    io.inputPad('只能呆在家里了。');
    caretaker.backup();

    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    expect(caretaker.showHistory()).toEqual([
      { date, state: '' },
      { date, state: '今天天气' },
      { date, state: '今天天气不好。' },
      { date, state: '今天天气不好。只能呆在家里了。' },
    ]);

    // 回退到'今天天气'，并且再次备份
    caretaker.undo();
    caretaker.undo();
    caretaker.undo();
    // 相同的备份不会清除掉'今天天气'后面的备份
    caretaker.backup();
    expect(caretaker.showHistory()).toEqual([
      { date, state: '' },
      { date, state: '今天天气' },
      { date, state: '今天天气不好。' },
      { date, state: '今天天气不好。只能呆在家里了。' },
    ]);

    io.inputPad('很好。');
    // 回退并备份不一样的状态后会清除掉后面的备份
    caretaker.backup();
    io.inputPad('我们出去玩吧！');
    caretaker.backup();

    expect(caretaker.showHistory()).toEqual([
      { date, state: '' },
      { date, state: '今天天气' },
      { date, state: '今天天气很好。' },
      { date, state: '今天天气很好。我们出去玩吧！' },
    ]);

    caretaker.undo();
    caretaker.undo();
    caretaker.undo();
    caretaker.undo();
    caretaker.undo();
    caretaker.undo();

    expect(mockLog.mock.calls.map((i) => i[0])).toEqual([
      '初试状态为:',
      '自动备份第一次状态',
      '备份状态',
      '保存输入状态:',
      '输入状态：今天天气',
      '备份状态',
      '保存输入状态:今天天气',
      '输入状态：今天天气不好。',
      '备份状态',
      '保存输入状态:今天天气不好。',
      '输入状态：今天天气不好。只能呆在家里了。',
      '备份状态',
      '保存输入状态:今天天气不好。只能呆在家里了。',

      '撤回',
      '恢复输入状态：今天天气不好。只能呆在家里了。',
      '撤回',
      '恢复输入状态：今天天气不好。',
      '撤回',
      '恢复输入状态：今天天气',
      '备份状态',
      '相同的状态，无需再次备份',

      '输入状态：今天天气很好。',
      '备份状态',
      '保存输入状态:今天天气很好。',
      '输入状态：今天天气很好。我们出去玩吧！',
      '备份状态',
      '保存输入状态:今天天气很好。我们出去玩吧！',
      '撤回',
      '恢复输入状态：今天天气很好。我们出去玩吧！',

      '撤回',
      '恢复输入状态：今天天气很好。',
      '撤回',
      '恢复输入状态：今天天气',
      '撤回',
      '恢复输入状态：',
      '没有更多备份记录了',
      '没有更多备份记录了',
    ]);

    expect(caretaker.showHistory()).toEqual([
      { date, state: '' },
      { date, state: '今天天气' },
      { date, state: '今天天气很好。' },
      { date, state: '今天天气很好。我们出去玩吧！' },
    ]);
  });
});
