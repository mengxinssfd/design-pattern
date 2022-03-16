import LazySingleton from '../src/singleton/Lazy';
import HungrySingleton from '../src/singleton/Hungry';

describe('singleton', () => {
  test('lazy', () => {
    // TS2673: Constructor of class 'LazySingleton' is private and only accessible within the class declaration
    // const ls = new LazySingleton();
    const ls = LazySingleton.ins;
    const ls2 = LazySingleton.ins;
    expect(ls instanceof LazySingleton).toBeTruthy();
    expect(ls).toBe(ls2);
  });
  test('lazy', () => {
    // TS2673: Constructor of class 'LazySingleton' is private and only accessible within the class declaration
    // const ls = new HungrySingleton();
    const ls = HungrySingleton.ins;
    const ls2 = HungrySingleton.ins;
    expect(ls instanceof HungrySingleton).toBeTruthy();
    expect(ls).toBe(ls2);
  });
});
