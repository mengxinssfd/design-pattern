import ConcreteComponentA from "@/Behavioral/Visitor/component/ConcreteComponentA";
import ConcreteComponentB from "@/Behavioral/Visitor/component/ConcreteComponentB";
import ConcreteVisitor1 from "@/Behavioral/Visitor/Visitor/ConcreteVisitor1";
import ConcreteVisitor2 from "@/Behavioral/Visitor/Visitor/ConcreteVisitor2";
import clientCode from "@/Behavioral/Visitor/clientCode";

describe('Visitor', () => {
  test("base",()=>{
    const components = [new ConcreteComponentA(), new ConcreteComponentB()];
    const visitor1 = new ConcreteVisitor1();
    clientCode(components, visitor1);
    const visitor2 = new ConcreteVisitor2();
    clientCode(components, visitor2);
  });
});
