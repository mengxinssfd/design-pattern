import { Component1, Component2 } from '@/Behavioral/Mediator/components';

export interface Mediator {
  modify(sender: object, event: string): void;
}

export class ConcreteMediator implements Mediator {
  constructor(private component1: Component1, private component2: Component2) {
    this.component1.setMediator(this);
    this.component2.setMediator(this);
  }

  modify(_sender: object, event: string): void {
    switch (event) {
      case 'A':
        this.component2.doC();
        break;
      case 'D':
        this.component1.doB();
        this.component2.doC();
        break;
    }
  }
}
