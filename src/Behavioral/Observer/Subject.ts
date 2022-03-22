import { Observer } from '@/Behavioral/Observer/Observer';

interface Subject {
  attach(observer: Observer);
  detach(observer: Observer);
  notify();
}

class ConcreteSubject implements Subject {
  public state!: number;
  private observers: Observer[] = [];
  attach(observer: Observer) {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log('Subject: Observer has been attached already.');
      return;
    }
    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }

  detach(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      console.log('Subject: Nonexistent observer.');
      return;
    }
    this.observers.splice(index, 1);
    console.log('Subject: Detached an observer.');
  }

  notify() {}
}
