# design-pattern

使用 typescript 实现设计模式

设计模式主要分为三大类：创建型、行为型和结构型

## [创建型(Creational patterns)](./src/Creational)

### 单例模式(Singleton Pattern)

> 单例模式是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。

单例模式实现分为懒汉式和饿汉式：区别在于懒汉式是使用到的时候才去 new 实例；而饿汉式是 class 初始化时就会 new 实例，浪费内存

1. [懒汉式](src/Creational/Singleton/Lazy.ts)
2. [饿汉式](src/Creational/Singleton/Hungry.ts)

### 工厂模式

分为 3 种模式：简单工厂模式、工厂模式、抽象工厂模式  
概括：

- 简单工厂：一个工厂类，一个产品抽象类。
- 工厂方法：多个工厂类，一个产品抽象类。
- 抽象工厂：多个工厂类，多个产品抽象类。

#### [简单工厂模式](src/Creational/SimpleFactory)

不属于 23 种设计模式中的一种

#### [工厂模式](src/Creational/Factory)

#### [抽象工厂模式](src/Creational/AbstractFactory)

### [建造者模式/生成器模式(Builder patterns)](./src/Creational/Builder)

一个产品的各部件通过建造者的方法生成

跟工厂模式的区别：建造者模式注重生产一个产品的细节

### [原型模式(Prototype patterns)](./src/Creational/Prototype)

如果你需要复制一些对象， 同时又希望代码独立于这些对象所属的具体类， 可以使用原型模式

原型机的原型, Rust的Copy trait可能是原型模式, js的原型不算原型模式

## [行为型(Behavioral patterns)](./src/Behavioral)

### 策略模式(Strategy Pattern)

> 策略模式是一种行为设计模式， 它能让你定义一系列算法， 并将每种算法分别放入独立的类中， 以使算法的对象能够相互替换。

一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类（可变），策略类封装了具体的算法，并负责具体的计算过程。第二个部分是环境类 Context（不变），Context 接受客户的请求，随后将请求委托给某一个策略类。要做到这一点，说明 Context 中要维持对某个策略对象的引用

可以减少 if else 的使用  
 [实现](src/Behavioral/Strategy/index.ts)  
 [使用方法](./__test__/Strategy.test.ts)

### [状态模式(State Pattern)](src/Behavioral/State)

跟策略模式很像

状态可被视为策略的扩展。 两者都基于组合机制： 它们都通过将部分工作委派给 “帮手” 对象来改变其在不同情景下的行为。 策略使得这些对象相互之间完全独立， 它们不知道其他对象的存在。 但状态模式没有限制具体状态之间的依赖， 且允许它们自行改变在不同情景下的状态。

跟中介者模式也很像，感觉两者理念冲突了
- 中介者模式：子组件通过父组件通信，避免交叉通信
- 状态模式：状态生成其他状态给上下文替换

### [命令模式(Command patterns)](src/Behavioral/Command)

类似js的回调的面向对象写法

### [迭代器模式(Iterator patterns)](src/Behavioral/Iterator)

js中内置有迭代器，用法类似rust，需要获取到迭代器遍历

一般直接用数组就可以了，暂时没想到要怎么使用


### [责任链模式](./src/Behavioral/ResponsibilityChain)

例子：

- [查找爱吃某食物的动物](./src/Behavioral/ResponsibilityChain/FindEatFoodAnimal.ts)

### [中介者模式(Mediator Pattern)](src/Behavioral/Mediator)

类似子组件通过父组件通信，避免交叉通信，跟观察者模式很像
区别

- 中介者模式：Mediator 更像上帝对象，可以用子组件的除私有外所有方法，操作集中在中介者
- 观察者模式：Subject 对象只是通知观察的对象，至于观察后做什么不管

### [观察者模式(Observer Pattern)](src/Behavioral/Observer)

跟发布订阅模式的关系，像工厂模式与抽象工厂模式的区别，发布订阅模式里的每一个类别都是一个观察者模式。

## [结构型(Structural patterns)](./src/Structural)

### 装饰器模式(Decorator Pattern)

> 装饰模式是一种结构型设计模式， 允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为。

类似闭包的用法，常用地防抖节流函数其实也是装饰器模式，可以很方便地转成装饰器([例子](https://github.com/mengxinssfd/ts-utils/blob/master/src/core/decorator.ts))  
 在`Angular`和`NestJS`中有大量装饰器使用  
 [方法装饰器实现](src/Structural/Decorator/index.ts)  
 [使用方法](./__test__/Decorator.test.ts)

### [组合模式(Composite patterns)](src/Structural/Composite)

树的形式,类似前端的组件化

### [外观模式(Facade patterns)](src/Structural/Facade)

类似黑盒，将多个复杂操作集合简化成一个

### [享元模式(Flyweight patterns)](src/Structural/Flyweight)

共享数据，类似算法中有用到的 hashmap 缓存

### [代理模式(Proxy patterns)](src/Structural/Proxy)

信用卡是银行账户的代理， 银行账户则是一大捆现金的代理。 它们都实现了同样的接口， 均可用于进行支付。 消费者会非常满意， 因为不必随身携带大量现金； 商店老板同样会十分高兴， 因为交易收入能以电子化的方式进入商店的银行账户中， 无需担心存款时出现现金丢失或被抢劫的情况。

跟外观模式很像。跟装饰器的面向对象写法也很像。

js中有个Proxy是用到了该模式

### [适配器模式(Adapter patterns)](src/Structural/Adapter)

适配器模式

### [桥接模式(Bridge patterns)](src/Structural/Bridge)

桥接模式和适配器模式及策略模式都很像 这两个模式不是太理解

## 相似的模式

简单工厂和策略：工厂注重生产，根据要求生产出对应的产品；而策略注重过程，需要 xx 策略去做某事
简单工厂模式：根据客户选择的条件，来帮客户创建一个对象。
策略模式：客户给它一个创建好的对象，它来帮客户做相应的事。


适配器和桥接