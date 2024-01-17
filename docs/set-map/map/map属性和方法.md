# map 属性和方法

## map 属性

<table>
<tr>
<td width="400px" valign="center">

### size

返回 Map 结构的成员总数

</td>
<td width="600px"><br>

```ts
const m = new Map([
  ["a", 1],
  ["b", 2],
  ["0", "a"],
  ["1", "b"],
]);
console.log(m.size); // 4
```
</td>
</tr>
</table>

## map 实例方法

| 方法             | 说明                                                                   |
| ---------------- | ---------------------------------------------------------------------- |
| `set(key,value)` | 设置`Map`对应的键值，并返回当前`Map`对象，所以set方法支持链式调用      |
| `get(key)`       | 返回指定键`key`对应的值，若不存在，则返回`undefined `                  |
| `has(key)`       | 判断`Map`中是否存在指定的键，有返回`true`,没有返回`false`              |
| `delete(key)`    | 根据键名，删除`Map`中指定的键值对。删除成功返回`true`，否则返回`false` |
| `clear()`        | 移除`Map`对象中所有的键值对。                                          |

:::tip `set(key,value)`
设置`Map`对应的键值，并返回当前`Map`对象，所以`set`方法支持链式调用
```ts
const map = new Map();
map.set("{a:1}", "obj");
map.set("name", "zs");
console.log(map); // Map(2) {'{a:1}' => 'obj', 'name' => '清心'}
```
:::

::: warning `get(key)`
返回指定键 `key` 对应的值，若不存在，则返回`undefined`
```ts
const key1 = "{a:1}";
const key2 = "name";
const map = new Map([
  [key1, "a"],
  [key2, "zs"],
]);
const value = map.get(key1);
console.log(value); // a
```
:::

::: danger `has(key)`
判断`Map`中是否存在指定的键，有返回`true`,没有返回`false`

```ts
const key1 = "{a:1}";
const key2 = "name";
const map = new Map([
  [key1, "a"],
  [key2, "zs"],
]);
console.log(map.has(key1)); //true
```
:::

:::info `delete(key)` 
根据键名，删除`Map`中指定的键值对。删除成功返回`true`，否则返回`false`

```ts
const key1 = "{a:1}";
const key2 = "name";
const map = new Map([
  [key1, "a"],
  [key2, "zs"],
]);
map.delete(key1); //true
console.log(map); // Map(1) {'name' => 'zs'}
```
:::

:::tip `clear()`  
移除`Map`对象中所有的键值对

```ts
const key1 = "{a:1}";
const key2 = "name";
const map = new Map([
  [key1, "a"],
  [key2, "zs"],
]);
console.log(map.clear()); // undefined
console.log(map); // Map(0) {size: 0}
```
:::