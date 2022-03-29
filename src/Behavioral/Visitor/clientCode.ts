import Component from '@/Behavioral/Visitor/component/Component';
import Visitor from '@/Behavioral/Visitor/Visitor/Visitor';

export default function clientCode(components: Component[], visitor: Visitor) {
  for (const component of components) {
    component.accept(visitor);
  }
}
