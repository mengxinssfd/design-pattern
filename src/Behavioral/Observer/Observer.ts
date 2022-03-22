import { ConcreteSubject, Subject } from './Subject';

export interface Observer {
  update(subject: Subject): void;
}

export class ConcreteObserverA implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}
export class ConcreteObserverB implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}
