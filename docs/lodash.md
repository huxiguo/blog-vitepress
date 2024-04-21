# lodash 使用

## lodash-es

为了更好地打包体积，我们使用了 `lodash-es` 来代替 `lodash`，`lodash-es` 是 `lodash` 的 ES6 模块化版本，使用方式和 `lodash` 一样，但是可以更好地配合 tree-shaking 进行打包。

在开发过程中发现 `chain`链式调用方法在打包后会失效，但是本地开发没有问题

解决办法

```js 
import map from 'lodash-es/map';
import filter from 'lodash-es/filter';
import mapValues from 'lodash-es/mapValues';
import toPairs from 'lodash-es/toPairs';
import orderBy from 'lodash-es/orderBy';
import groupBy from 'lodash-es/groupBy';
import sortBy from 'lodash-es/sortBy';

// just add here the lodash functions you want to support
const chainableFunctions = {
  map,
  filter,
  toPairs,
  orderBy,
  groupBy,
  sortBy,
};

export const chain = (input) => {
  let value = input;
  const wrapper = {
    ...mapValues(
      chainableFunctions,
      (f) => (...args) => {
        // lodash always puts input as the first argument
        value = f(value, ...args);
        return wrapper;
      },
    ),
    value: () => value,
  };
  return wrapper;
};

```

```ts
export const chain = <T>(input: T) => {
  let value: any = input;
  const wrapper = {
    ...mapValues(
      chainableFunctions,
      (f: any) => (...args: any[]) => {
        // lodash always puts input as the first argument
        value = f(value, ...args);
        return wrapper;
      },
    ),
    value: () => value,
  };
  return wrapper as _.LoDashExplicitWrapper<T>;
};
```