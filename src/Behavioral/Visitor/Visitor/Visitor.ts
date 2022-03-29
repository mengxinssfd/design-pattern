import {ConcreteComponentA, ConcreteComponentB} from "@/Behavioral/Visitor/index";

export default interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA);
  visitConcreteComponentB(element: ConcreteComponentB);
}
