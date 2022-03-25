import { ComponentWithBackReference, Prototype } from '../src/Creational/Prototype';
describe('Prototype', () => {
  test('Prototype', () => {
    const p1 = new Prototype();
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();

    expect(p1).not.toBe(p2);
    expect(p1.component).not.toBe(p2.component);
    expect(p1.circularReference).not.toBe(p2.circularReference);
  });
});
