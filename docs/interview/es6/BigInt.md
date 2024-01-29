# BigInt

## 为什么要有 BigInt 类型

JS 能表示的最大的安全正整数保存在`Number.MAX_SAFE_INTEGER`中，他的值 等于`2^53-1=9007199254740991`

如果 JS 中整数的范围一旦超过这个范围，就无法精确表示。

```ts
let n = Number.MAX_SAFE_INTEGER;
console.log(n); // 9007199254740991
let n1 = 9007199254740991 + 1;
let n2 = 9007199254740991 + 2;
console.log(n1 === n2); // true
```

::: warning 注
以上的 `n1` 显然和 `n2` 不相等，但是最后的结果显示的为 `true`，说明 `JS` 已经无法安全的识别这是两个不同的数了。

为了解决这个问题，JS 中引用了 `BigInt` 这种原始数据类型。他可以表示大于`2^53 - 1 `的整数。它只用来表示整数，同时没有位数的限制，任何位数的整数都可以精确表示。
:::

## 如何定义 BigInt 类型数据

- 可以在一个整数的字面量后面加 `n` 的方式定义一个 `BigInt`
- 也可以调用函数`BigInt()`并传递一个整数值或字符串值

```ts
let n1 = 2n;
let n2 = BigInt(3n);
let n3 = BigInt("3");
console.log(n1); // 2n
console.log(n2); // 3n
console.log(n3); // 3n

console.log(typeof n1); // bigint
console.log(typeof n2); // bigint
console.log(typeof n2); // bigint

console.log(2 == n1); // true
console.log(3 == n2); // true
console.log(3 == n3); // true

console.log(2 === n1); // false
console.log(3 === n2); // false

// 不过我们最好不要用==来比较bigint和number类型，因为会出错
let n1 = 9007199254740993;
let n2 = 9007199254740992n;
console.log(n1 == n2); // true
```

BigInt 只能用来表示整数，如果是小数，则会自动忽略小数部分

```ts
let n = 2.3; // 抛出语法类型错误
let n = BigInt("2.33"); // 抛出语法类型错误
```

BigInt 类型不能与 Number 类型进行混合运算

```ts
let n1 = 1 + 2n; // 抛出语法错误
```