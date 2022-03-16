import { cloneStrategies } from '../src/Strategy';

describe('Strategy', () => {
  test('cloneStrategies', () => {
    // 引用类型数组
    // 'array' | 'date' | 'object' | 'regexp'
    const arr = [[1, 2, 3], new Date(), { a: 123 }, /test/];

    // 获取数据类型
    function typeOf(target: any): string {
      return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
    }
    // 使用策略模式复制arr
    const cloned = arr.map((it) => {
      // 使用策略模式
      return cloneStrategies[typeOf(it)](it);
    });
    // 验证
    arr.forEach((it, i) => {
      // 值等于
      expect(it).toEqual(cloned[i]);
      // 严格不等于
      expect(it).not.toBe(cloned[i]);
    });
  });
});
