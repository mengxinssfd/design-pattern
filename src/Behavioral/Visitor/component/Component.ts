import Visitor from "@/Behavioral/Visitor/Visitor/Visitor";

export default interface Component {
  accept(visitor: Visitor);
}
