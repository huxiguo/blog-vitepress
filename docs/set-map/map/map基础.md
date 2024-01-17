# Map

## 为什么引入 Map

::: tip 对象本身的局限性
JavaScript 的对象（Object）本质上是键值对的集合，但是其键名只能是字符串 和 Symbol类型，不能是其它数据类型，这给它的使用带来了很大的限制。

如果我想将一个 DOM 节点和节点对应的样式，以键值对的形式存到对象中，是没办法存的，因为 DOM 节点会被转换为字符串类型，转换为[object HTMLDivElement]
:::

<<< @/snippets/map/map_01.ts#snippet

:::tip Map 的强大点
为了解决这个问题，ES6 提供了 Map 数据结构，它类似于对象，也是键值对集合，但是他的“键”可以是 任意的数据类型。

如果说 `Object` 结构提供的是 `字符串 --> 值` 的映射，那 Map 结构提供的是 “值 ---> 值" 的映射
:::

<<< @/snippets/map/map_02.ts#snippet

## 基本用法


### new Map() 方式创建，随后用 set 方法添加成员

```ts
const map = new Map();
map.set({ age: 1 }, "AG");
map.set({ age: 33 }, "xbc");
console.log(map); // Map(2) {{…} => 'AG', {…} => 'xbc'}
```

### new Map() 方式创建，并初始化成员

```ts
const map = new Map([
  [{ age: 1 }, "AG"],
  [{ age: 33 }, "xbc"],
]);
console.log(map);
```

:::warning 重点
其实任何可迭代对象，只要可迭代对象返回的每个成员都是一个类似双元素数组的数据结构，都可以作为 Map 构造函数的参数。
:::

<<< @/snippets/map/map_03.ts#snippet

为对象添加iterator接口，把对象变成一个可迭代对象，同时返回值为 一个双元素数组。这样所有对象都可以做为Map()构造函数的参数

<<< @/snippets/map/map_04.ts#snippet

## Map 中键的唯一性

:::tip 键的唯一性
在 `Map` 中，键名是唯一的。键的比较是基于零值相等算法 ，认为 `NaN` 和 `NaN` 是相等的，同时 `0`，`-0`，`+0` 也是相等的，其它判断和`===`严格相等一样
:::


<<< @/snippets/map/map_05.ts#snippet

## Map 键的顺序

:::tip 顺序
`Map` 中的键是有序的。其顺序为插入时的顺序。因此，当迭代的时候，一个 Map 对象以插入的顺序返回键值。

> 我们知道，对象的键是无序的，很多时候我们想以插入的顺序来访问对应的键时，对象就没法实现。
:::

<<< @/snippets/map/map_06.ts#snippet