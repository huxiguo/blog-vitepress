# Set 实例的属性和方法

Set 结构的实例有以下属性。

- `Set.prototype.constructor`：构造函数，默认就是Set函数。
- `Set.prototype.size`：返回Set实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

- `Set.prototype.add(value)`：添加某个值，返回 `Set` 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

<<< @/snippets/interview-js-set/interview-js-set_05.ts#snippet

判断是否包括一个键，`Object`结构和`Set`结构写法的不同。

<<< @/snippets/interview-js-set/interview-js-set_06.ts#snippet

`Array.from()`方法可以将 Set 结构转为数组。

<<< @/snippets/interview-js-set/interview-js-set_07.ts#snippet

数组去重

<<< @/snippets/interview-js-set/interview-js-set_08.ts#snippet