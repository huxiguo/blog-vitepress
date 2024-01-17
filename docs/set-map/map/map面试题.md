# 面试题

## Object 和 Map 的区别

| /            | Map                                                                             | Object                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 意外的键     | `Map` 默认情况不包含任何键。只包含显式插入的键。                                | 一个 `Object` 有一个原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。                                           |
| 键的类型     | 一个 `Map` 的键可以是任意值，包括函数、对象或任意基本类型。                     | 一个 `Object` 的键必须是一个`String`或`Symbol`类型                                                                             |
| 键的顺序     | `Map` 中的键是有序的。因此，当迭代的时候，一个 `Map` 对象以插入的顺序返回键值。 | 虽然 `Object` 的键目前是有序的，但并不总是这样，而且这个顺序是复杂的。因此，最好不要依赖属性的顺序。                           |
| `size`       | `Map` 的键值对个数可以轻易地通过 `size` 属性获取。                              | `Object` 的键值对个数只能手动计算                                                                                              |
| 迭代         | `Map` 是 可迭代的 的，所以可以直接被迭代。                                      | `Object` 没有实现迭代协议，所以使用 `JavaSctipt` 的 `for...of`表达式并不能直接迭代对象。                                       |
| 性能         | 在频繁增删键值对的场景下表现更好                                                | 在频繁添加和删除键值对的场景下未作出优化。                                                                                     |
| 序列化和解析 | 没有元素的序列化和解析的支持。                                                  | 原生的由 `Object`到 `JSON` 的序列化支持，使用 `JSON.stringify()`；原生的由 `JSON` 到 `Object`的解析支持，使用 `JSON.parse()`。 |


- 意外的键，对象原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

```ts
function Point() {}
Point.prototype.x = 3;
const point = new Point();
// 自己定义的键名和原型上的键名产生冲突
point.x = 1;
```

- 迭代，可以动为对象实现迭代协议，也可以用Object.keys或Object.values方法

```ts
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let key of Object.keys(obj)) {
  console.log(key);
}

for (let key of Object.values(obj)) {
  console.log(key);
}
```

- 序列化和反序列化

```ts
const obj = {
  username: "清心",
  age: 33,
};
// 将对象转换为字符串 （对象序列化）
const strJson = JSON.stringify(obj);
console.log(strJson);
console.log(typeof strJson);

// 将JSON字符串转换为对象，字符串解析
const obj2 = JSON.parse(strJson);
console.log(obj2);
console.log(typeof obj2);
```

## Map 与对象之间的互转

- Map 转对象

```ts
const map = new Map()
  .set([1, 2, 3], true)
  .set(Symbol(), "符号")
  .set("username", "清心")
  .set({ a: 1 }, "对象");

// 将map转换为对象
function objToMap(map) {
  const obj = new Object();
  for (let [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}
console.log(objToMap(map));

// {1,2,3: true, username: '清心', [object Object]: '对象', Symbol(): '符号'}
```

- 对象转 Map

```ts
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const map = new Map(Object.entries(obj));
console.log(map); // Map(3) {'a' => 1, 'b' => 2, 'c' => 3}
```