// 懒汉式
export default class LazySingleton {
  // 1、构造器加上private，禁止外部new该实例
  private constructor() {}
  // 2、设置一个静态变量存储实例，加上private禁止class外部使用；或者在class外部设置一个变量
  private static _ins?: LazySingleton;
  // 3、添加一个ins获取实例，
  static get ins(): LazySingleton {
    if (!LazySingleton._ins) {
      LazySingleton._ins = new LazySingleton();
    }
    return LazySingleton._ins;
  }
}
