// 基础用法
export function baseDecor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const origin = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`before call ${propertyKey}`);
    const res = origin(...args);
    console.log(`after call ${propertyKey}`);
    return res;
  };
}

// 接收一个参数，可以作为一个闭包函数使用
export function receiveDataDecor(a:number) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.value = function (b:number) {
      return a + b;
    };
  };
}
