type Strategy = (target: any) => any;

const cloneObject = (target) => {
  const ins = new target.constructor();
  for (const k in target) {
    if (!Object.prototype.hasOwnProperty.call(target, k)) continue;
    ins[k] = target[k];
  }
  return ins;
};
const cloneDate = (target) => new target.constructor(target);

// 参考 https://github.com/mengxinssfd/ts-utils/blob/master/src/core/clone.ts
// 复制策略。浅层复制，深复制还要遍历数组和对象的所有属性
export const cloneStrategies: Record<'array' | 'date' | 'object' | 'regexp', Strategy> = {
  object: cloneObject,
  array: cloneObject,
  date: cloneDate,
  regexp: cloneDate,
};
