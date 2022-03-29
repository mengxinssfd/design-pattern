export interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA);
  visitConcreteComponentB(element: ConcreteComponentB);
}

export interface Component {
  accept(visitor: Visitor);
}

export class ConcreteComponentA implements Component {
  accept(visitor: Visitor) {
    visitor.visitConcreteComponentA(this);
  }
  exclusiveMethodOfConcreteComponentA(): string {
    return 'A';
  }
}
export class ConcreteComponentB implements Component {
  accept(visitor: Visitor) {
    visitor.visitConcreteComponentB(this);
  }
  specialMethodOfConcreteComponentB(): string {
    return 'B';
  }
}
export class ConcreteVisitor1 implements Visitor {
  visitConcreteComponentA(element: ConcreteComponentA) {
    console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
  }

  visitConcreteComponentB(element: ConcreteComponentB) {
    console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
  }
}
export class ConcreteVisitor2 implements Visitor {
  visitConcreteComponentA(element: ConcreteComponentA) {
    console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`);
  }

  visitConcreteComponentB(element: ConcreteComponentB) {
    console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`);
  }
}
