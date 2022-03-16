// 饿汉式
export default class HungrySingleton {
  // 1、构造器加上private，禁止外部new该实例
  private constructor() {}
  // 2、在静态属性里new一个实例，使用readonly禁止修改
  static readonly ins: HungrySingleton = new HungrySingleton();
}
