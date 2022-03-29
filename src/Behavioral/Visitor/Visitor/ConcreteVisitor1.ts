import Visitor from '@/Behavioral/Visitor/Visitor/Visitor';
import ConcreteComponentA from '@/Behavioral/Visitor/component/ConcreteComponentA';
import ConcreteComponentB from '@/Behavioral/Visitor/component/ConcreteComponentB';

export default class ConcreteVisitor1 implements Visitor {
  visitConcreteComponentA(element: ConcreteComponentA) {
    console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
  }

  visitConcreteComponentB(element: ConcreteComponentB) {
    console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
  }
}
