import Component from "@/Behavioral/Visitor/component/Component";
import Visitor from "@/Behavioral/Visitor/Visitor/Visitor";

export default class ConcreteComponentB implements Component {
  accept(visitor: Visitor) {
    visitor.visitConcreteComponentB(this);
  }
  specialMethodOfConcreteComponentB(): string {
    return 'B';
  }
}