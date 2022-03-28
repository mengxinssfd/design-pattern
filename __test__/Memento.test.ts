import {Caretaker, Originator} from "../src/Behavioral/Memento";

describe('Memento', () => {
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
});
