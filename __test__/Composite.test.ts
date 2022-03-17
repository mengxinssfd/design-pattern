import { Composite, Leaf } from '../src/Structural/Composite';

test('Composite', () => {
  const tree = new Composite();
  const branch1 = new Composite();
  const branch2 = new Composite();
  const leaf1 = new Leaf();
  const leaf2 = new Leaf();
  const leaf3 = new Leaf();

  branch1.add(leaf1);
  branch1.add(leaf2);
  branch2.add(leaf3);

  tree.add(branch1);
  tree.add(branch2);

  expect(tree.operation()).toBe('Branch(Branch(Leaf + Leaf) + Branch(Leaf))');
});
