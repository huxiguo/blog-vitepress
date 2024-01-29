# Symbol

## 什么是 `Symbol`

`Symbol`（符号、象征） 是 `ES6` 中引入的一种新的基本（原始）数据类型，用于表示一个独一无二的值。它是 `JavaScript` 中的第七种数据类型，与 `undefined`、`null`、`Number`（数值）、`String`（字符串）、`Boolean`（布尔值）、`Object`（对象）并列。

> 创建一个 `Symbol` 值的方式如下：
  
```ts
const s = Symbol();
console.log(s); // Symbol()
console.log(typeof s); // symbol
```

::: warning 注意
`Symbol` 值通过`Symbol()`函数生成，上面代码中，变量`s`就是一个独一无二的值。

`typeof`运算符的结果，表明变量`s`是 `Symbol` 数据类型，而不是字符串之类的其他类型。
:::

如果用 `Symbol()` 创建多个 `Symbol` 值时，即使他们长的完全一样，但是值是不相同的。

## `Symbol` 的语法规范

```ts
let s = Symbol();
let m = Symbol();

console.log(s); // Symbol()
console.log(m); // Symbol()

console.log(s === m); // false
```

以上的方式不利于我们区分两个变量，同时我们也不知道 Symbol 象征或代表的是什么, 所以我们可以给 Symbol 象征或代表的是什么添加一个描述。

```ts
let s = Symbol('foo');
let m = Symbol('bar');

console.log(s); // Symbol(foo)
console.log(m); // Symbol(bar)
```

::: danger  注意
不过还是要特别注意，Symbol 的变量的描述是一样的，也是两个不同的值
:::

```ts
const s = Symbol("a");
const m = Symbol("a");
console.log(s);
console.log(m);
console.log(s === m); // false
```

> Symbol 的描述符，如果传如的不是字符串类型，则会转换为对应的字符串

```ts 
let s1 = Symbol("abc");
let s2 = Symbol(11);
let s3 = Symbol([1, 2, 3]);
let s4 = Symbol({});
console.log(s1); // Symbol(abc)
console.log(s2); // Symbol(11)
console.log(s3); // Symbol(1,2,3)
console.log(s4); // Symbol([object Object])
```


## `Symbol.for()`

::: info 说明
- 有时，我们希望重新使用同一个 `Symbol` 值，`Symbol.for()`方法可以做到这一点。
- 提供的一种可以创建相同 `Symbol` 的机制，就是使用 `Symbol.for()`方法进行注册。
- 当我们使用`Symbol.for()`来创建 `Symbol` 值时，首先会在全局环境中搜索，检测给定的 `key`（描述符）是否已存在
  - 如果不存才会创建一个新的 `Symbol` 值，并且会在全局环境中登记。
  - 如果已存在，则会使用已存在的 `Symbol` 值。
- 不管 `Symbol.for()`在哪里调用，最后都会登记注册在全局环境中
:::

```ts
function fn() {
  // 全局注册以"icoding"为描述符的 Symbol
  const m = Symbol.for("icoding");
  return m;
}
const s = fn();
// 由于描述符"icoding"已被注册到全局，因此这里创建的 Symbol 与全局是同一个
const y = Symbol.for("icoding");
console.log(s === y); //true
```

## `Symbol.keyFor()`

`Symbol.keyFor()` 返回一个全局注册的 `Symbol` 的描述符

```ts
let s = Symbol.for("icoding");
let m = Symbol.keyFor(s);

console.log(m); // icoding
```

## `Symbol` 与基本数据类型转换

::: info 说明
`Symbol` 不能转成数字

```ts
let s = Symbol("123");
console.log(Number(s)); // 报错
```
:::

Symbol 可以转成 布尔值 和 字符串

```ts
let s = Symbol("123");
console.log(typeof s); // symbol

let str = String(s);
console.log(str); // Symbol(123)
console.log(typeof str); // string

let bool = Boolean(s);
console.log(bool); // true
console.log(typeof bool); // boolean
```

## Symbol 属性的遍历

::: tip 说明
- 以 `Symbol` 类型的变量作为对象属性时，该属性不会出现在 `for … in`、`for … of`循环中。也不会被`Object.keys()`、`Object.getOwnPropertyNames()`返回。
- 我们可以通过`Object.getOwnPropertySymbols()`方法返回一个数组，成员是当前对象的所有用作属性名的 `Symbol` 值。
- 如果想要一次性获取到对象的所有属性，可以利用`Reflect.ownKeys(obj)`
:::

<<< @/snippets/symbol/symbol_01.ts#snippet

## Symbol 的应用

### 消除对象同名属性之间覆盖问题

- 由于每一个 `Symbol` 值都是不相等的，这意味着 `Symbol` 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
- 如果我们对一个对象身上有哪些属性不清楚，但我们想再给对象添加一个新属性时，有可能新属性名与对象原有的属性名相同，而造成同名属性的覆盖，如果用 `Symbol` 就可以解决这个问题。

```ts
// addMethod方法为obj对象添加某个属性，属性值为fn
function addMethod(obj, fn) {
  // ....
  // 为对象obj添加了唯一的属性s
  const s = Symbol("color");
  obj[s] = fn;
}
```


### 消除魔术字符串

- 魔术字符串是指：在代码之中出现多次、与代码形成强耦合的某一个具体的字符串或数值。
- 风格良好的代码，应该尽量消除魔术字符串，而由含义清晰的变量代替

> 如果我们要计算不同形状的面积，我们可以写下面这个方法来实现

<<< @/snippets/symbol/symbol_02.ts#snippet

>以上代码中的字符串 "rectangle"、“triangle”、"circle"就是魔术字符串，它多次出现，与代码形成强耦合，不利于将来的修改和维护。

常用来消除魔术字符串的方法，就是把它写成一个变量。我们定义一个对象

```ts
let shapeType = {
  rectangle: Symbol(),
  triangle: Symbol(),
  circle: Symbol(),
};
```

```ts
let shapeType = {
  rectangle: Symbol(),
  triangle: Symbol(),
  circle: Symbol(),
};

// 计算图形的面积
function getArea(shape, options) {
  let area = 0; // 保存最终计算得到的面积
  switch (shape) {
    case shapeType.rectangle: 
      area = options.width * options.height;
      break;
    case shapeType.triangle:
      area = (options.width * options.height) / 2;
      break;
    case shapeType.circle:
      area = 2 * Math.PI * options.radius;
      break;
  }
  return area;
}

console.log(getArea(shapeType.rectangle, { width: 100, height: 100 }));
```