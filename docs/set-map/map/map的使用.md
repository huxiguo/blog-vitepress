# 使用map

## Map 与解构赋值

```ts
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

const [x, y] = map;
console.log(x); //  ['a', 1]
console.log(y); //  ['b', 2]

const [[a, b], [c, d]] = map;
console.log(a, b); // a 1
console.log(c, d); // b 2
```

## Map 与扩展运算符

- 利用扩展运算符可以将 Map 结构转换成对应的二维数组

```ts
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

const arr = [...map];
console.log(arr); // [['a', 1],['b', 2]]
const [arr1, arr2] = [...map];
console.log(arr1); // ['a', 1]
console.log(arr2); // ['b', 2]
```

- Map 对象与 Map 或数组合并时，如果有重复的键值，则后面的会覆盖前面的。

```ts
const map1 = new Map([
  ["a", 1],
  ["b", 2],
]);
const map2 = new Map([
  ["a", "{a:1}"],
  ["c", 3],
  ["d", "d"],
]);

const arr = ["c", null];
const map3 = new Map([...map1, ...map2, arr]);
console.log(map3); // Map(4) {'a' => '{a:1}', 'b' => 2, 'c' => null, 'd' => 'd'}
```
##  Map 使用数组的所有方法

> 利用数组的 filter 方法来过滤 Map 中所有价格大于 10 元的菜

```ts
let arrs = [
  ["白菜", 2.0],
  ["萝卜", 3.4],
  ["西蓝花", 5.8],
  ["茄子", 7.8],
];
let map = new Map(arrs);
// 1、先将map转数组
//   arrs = [...map];
// 2、利用数组的方法
//   arrs = arrs.filter(([key, value]) => value > 5);
// 3、将数组作为map构造函数的参数
//   map = new Map(arrs);
//   console.log(map);

// 以下是简写形式
map = new Map([...map].filter(([key, value]) => value > 5));
console.log(map);
```

## Map 在实际开发中的应用

:::details 点击查看代码
<<< @/snippets/map/map_07.html
:::
