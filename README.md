# design-pattern
使用typescript实现设计模式

- 单例模式(Singleton Pattern)  
  单例模式实现分为懒汉式和饿汉式：区别在于懒汉式是使用到的时候才去new实例；而饿汉式是class初始化时就会new实例，浪费内存
  1. [懒汉式](./src/Singleton/Lazy.ts)
  2. [饿汉式](./src/Singleton/Hungry.ts)
- 策略模式(Strategy Pattern)  
  可以减少if else的使用  
  [实现](./src/Strategy/index.ts)  
  [使用方法](./__test__/Strategy.test.ts)
- 装饰器模式(Decorator Pattern)
  类似闭包的用法，常用地防抖节流函数其实也是装饰器模式，可以很方便地转成装饰器([例子](https://github.com/mengxinssfd/ts-utils/blob/master/src/core/decorator.ts))  
  [实现](./src/Decorator/index.ts)  
  [使用方法](./__test__/Decorator.test.ts)
