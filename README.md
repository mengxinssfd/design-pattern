# design-pattern
使用typescript实现设计模式

## 单例模式
单例模式实现分为懒汉式和饿汉式：区别在于懒汉式是使用到的时候才去new实例；而饿汉式是class初始化时就会new实例，浪费内存
- [懒汉式](./src/singleton/Lazy.ts)
- [饿汉式](./src/singleton/Hungry.ts)
