# design-pattern
使用typescript实现设计模式  

设计模式主要分为三大类：创建型、行为型和结构型

## [创建型(Creational patterns)](./src/Creational)
- 单例模式(Singleton Pattern)  
  单例模式是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。
  单例模式实现分为懒汉式和饿汉式：区别在于懒汉式是使用到的时候才去new实例；而饿汉式是class初始化时就会new实例，浪费内存
  1. [懒汉式](src/Creational/Singleton/Lazy.ts)
  2. [饿汉式](src/Creational/Singleton/Hungry.ts)
## [行为型(Behavioral patterns)](./src/Behavioral)
- 策略模式(Strategy Pattern)  
  策略模式是一种行为设计模式， 它能让你定义一系列算法， 并将每种算法分别放入独立的类中， 以使算法的对象能够相互替换。    
  可以减少if else的使用  
  [实现](src/Behavioral/Strategy/index.ts)  
  [使用方法](./__test__/Strategy.test.ts)
## [结构型(Structural patterns)](./src/Structural)
- 装饰器模式(Decorator Pattern)
  装饰模式是一种结构型设计模式， 允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为。  
  类似闭包的用法，常用地防抖节流函数其实也是装饰器模式，可以很方便地转成装饰器([例子](https://github.com/mengxinssfd/ts-utils/blob/master/src/core/decorator.ts))  
  在`Angular`和`NestJS`中有大量装饰器使用  
  [方法装饰器实现](src/Structural/Decorator/index.ts)  
  [使用方法](./__test__/Decorator.test.ts)

  



