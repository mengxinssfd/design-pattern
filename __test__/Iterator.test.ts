import { WordsCollection } from '../src/Behavioral/Iterator';
import useMockConsoleLog from './useMockConsoleLog';

describe('Iterator', () => {
  let mockLog = useMockConsoleLog((l) => (mockLog = l));
  test('base', () => {
    const collection = new WordsCollection();

    const items = ['First', 'Second', 'Third'];
    items.forEach((item) => collection.addItem(item));

    // 正序迭代器
    const iterator = collection.getIterator();
    while (iterator.valid()) {
      console.log(iterator.next());
    }

    // 倒序迭代器
    const reverseIterator = collection.getReverserIterator();
    while (reverseIterator.valid()) {
      console.log(reverseIterator.next());
    }

    expect(mockLog.mock.calls.map((i) => i[0])).toEqual([...items, ...items.reverse()]);
  });
});
