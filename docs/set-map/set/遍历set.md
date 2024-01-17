# 遍历操作

Set 结构的实例有四个遍历方法，可以用于遍历成员。

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

## `keys()`，`values()`，`entries()`

`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象。由于 `Set` 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys`方法和`values`方法的行为完全一致。

<<< @/snippets/interview-js-set/interview-js-set_09.ts#snippet

## `forEach`

Set 结构的实例与数组一样，也拥有`forEach`方法，用于对每个成员执行某种操作，没有返回值。

<<< @/snippets/interview-js-set/interview-js-set_10.ts#snippet

## 遍历的应用

扩展运算符（`...`）内部使用`for...of`循环，所以也可以用于 Set 结构。

<<< @/snippets/interview-js-set/interview-js-set_11.ts#snippet

扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。

<<< @/snippets/interview-js-set/interview-js-set_12.ts#snippet

数组的`map`和`filter`方法也可以间接用于 Set 了。

<<< @/snippets/interview-js-set/interview-js-set_13.ts#snippet

实现并集（`Union`）、交集（`Intersect`）和差集（`Difference`）

<<< @/snippets/interview-js-set/interview-js-set_14.ts#snippet