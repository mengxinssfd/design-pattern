import {ConcreteObserverA, ConcreteObserverB} from "../src/Behavioral/Observer/Observer";
import {ConcreteSubject} from "../src/Behavioral/Observer/Subject";

test("Observer",()=>{
  const subject = new ConcreteSubject();
  const ob1 = new ConcreteObserverA();
  const ob2 = new ConcreteObserverB();

  subject.attach(ob1);
  subject.attach(ob2);

  subject.someBusinessLogin();
  subject.someBusinessLogin();

})