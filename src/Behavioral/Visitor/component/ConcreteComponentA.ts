import Component from "@/Behavioral/Visitor/component/Component";
import Visitor from "@/Behavioral/Visitor/Visitor/Visitor";

export default class ConcreteComponentA implements Component {
  accept(visitor: Visitor) {
    visitor.visitConcreteComponentA(this);
  }
  exclusiveMethodOfConcreteComponentA(): string {
    return 'A';
  }
}