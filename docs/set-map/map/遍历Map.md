# 遍历map

| 方法        | 说明                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `keys()`    | 返回一个新的迭代对象，其中包含 `Map` 对象中所有的键，其顺序为 `Map` 对象插入成员时的顺序排列                                      |
| `values()`  | 返回一个新的迭代对象，其中包含 `Map` 对象中所有的值，其顺序为 `Map` 对象插入成员时的顺序排列                                      |
| `entries()` | 返回一个新的迭代对象，其为一个包含 `Map` 对象中所有键值对的 `[key, value]` 数组，其顺序为 `Map` 对象插入成员时的顺序排列          |
| `forEach()` | 以插入的顺序对 `Map` 对象中存在的键值对分别调用一次 `callbackFn`。如果给定了 `thisArg` 参数，这个参数将会是回调函数中 `this` 的值 |

<table>
<tr>
<td width="400px" valign="center">

### `keys()` 

返回一个新的迭代对象，其中包含 `Map` 对象中所有的键，其顺序为 `Map` 对象插入成员时的顺序排列

</td>
<td width="600px"><br>

```ts
const map = new Map([
  ["name", "zs"],
  ["age", 33],
  [0, null],
  [null, "zs"],
]);
// map.keys()  返回一个新的迭代对象，可以用for...of来遍历
for (let key of map.keys()) {
  console.log(key);
}
```
</td>
</tr>
</table>

<table>
<tr>
<td width="400px" valign="top">

### `values()`

返回一个新的迭代对象，其中包含 `Map` 对象中所有的值，其顺序为 `Map` 对象插入成员时的顺序排列

</td>
<td width="600px"><br>

```ts
const map = new Map([
  ["name", "清心"],
  ["age", 33],
  [0, null],
  [null, "zs"],
]);
// map.values()  返回一个新的迭代对象，可以用for...of来遍历
for (let value of map.values()) {
  console.log(value);
}
```

</td>
</tr>
</table>

<table>
<tr>
<td width="400px" valign="top">

### `entries()`

返回一个新的迭代对象，其为一个包含 `Map` 对象中所有键值对的 `[key, value]` 数组，其顺序为 `Map` 对象插入成员时的顺序排列

</td>
<td width="600px"><br>

```ts
const map = new Map([
  ["name", "zs"],
  ["age", 33],
  [null, "zs"],
]);
// map.keys()  返回一个新的迭代对象，可以用for...of来遍历
for (let key of map.entries()) {
  console.log(key);
}
```

</td>
</tr>
</table>

<table>
<tr>
<td width="400px" valign="top">

###  `forEach()`

以插入的顺序对 `Map` 对象中存在的键值对分别调用一次 `callbackFn`。如果给定了 `thisArg` 参数，这个参数将会是回调函数中 `this` 的值

</td>
<td width="600px"><br>

```ts
const map = new Map([
  ["name", "zs"],
  ["age", 33],
  [null, "zs"],
]);
map.forEach(function (value, key, map) {
  console.log(value, key, map);
});
```

</td>
</tr>
</table>