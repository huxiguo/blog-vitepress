# let、const 和 var 的区别

## 1. 不允许重复声明

::: tip
重复声明：是指在同—作用域下已经存在的变量或常量，又声明了—遍

同一作用域下，var 允许重复声明，let、const 不允许
:::

```ts
// 如：使用var重复声明变量
var i = 1;
// ... 在写了很多行代码之后，突然忘记了之前有声明过a变量，又声明了一次
var i = 2;
console.log(i); // 2 ，这里最可气的是 控制台居然没有报错，还给我们修改了值

// 如：使用 let 或 const 重复声明变量
let n = 1;
// ...
let n = 2; // Uncaught SyntaxError: Identifier 'n' has already been declared 已声明标识符 "n"
console.log(n);

// 使用 const 声明与 let 类似
```

另一种重复声明的场景也会报错

```ts
// 声明一个函数（以函数参数的形式声明的变量）
function foo(i) {
  let i = 2; // Uncaught SyntaxError: Identifier 'i' has already been declared 已声明标识符 "i"
}
foo();
```

## 2. 不存在变量提升

::: tip 变量提升
`var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

为了纠正这种现象，`let`命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。
:::

var 会提升变量的声明到当前作用域的顶部

```ts
// 不声明变量，直接使用
console.log(a); // Uncaught ReferenceError: a is not defined
```

先输出，后声明，分析变量提升的过程

```ts
console.log(a); // undefined
var a = 1;
// 没有报错，输出了 undefined ，这就涉及到了变量提升

// 以上代码通过变量提升后，实际的相当于如下步骤
var a;
console.log(a); // undefined
a = 1;
console.log(a); // 1

// 其实变量提升带给我们更多的是困惑，因为它会和我们的想法和逻辑是不相符的，这也是我们学习JS需要记住的点
```

let、const 不存在变量提升

```ts
console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization 初始化之前无法访问 “a”
let a = 1;

// 之所以报错，是因为 let 或 const 不存在变量提升
```

## 3. 暂时性死区

::: tip 暂时性死区
只要作用域内存在 `let`、`const` ，它们所声明的变量或常量就自动 “绑定” 这个区域，不再受到外部作用域的影响
`let`、`const` 存在暂时性死区，`var` 不存在
:::

```ts
let a = 1;
function foo() {
  console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization 初始化之前无法访问“a”
  let a = 2;
}
foo();

// 以上代码存在全局变量 a ，但函数作用域内 let 又声明了一个局部变量 a ，导致后者绑定这个函数作用域
// 所以在 let 声明变量前，输出 a 会报错
```

:::warning ES6 明确规定
如果区块中存在 let 和 const 命令，则这个区块对这些命令声明的变量从一开始就形成封闭作用域。只要在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上称为 “暂时性死区” （temporal dead zone ，简称 TDZ）
:::

有些“死区”比较隐蔽，不太容易发现

```ts
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
bar(2, 3); // 不报错

// 上面代码中，调用bar函数之所以报错，是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于“死区”。
// 如果y的默认值是x，就不会报错，因为此时x已经声明了。

function bar(x = 2, y = x) {
  return [x, y];
}
bar(); // [2, 2]
```

## 4. window 对象的属性和方法

:::tip 
全局作用域中，var 声明的变量，通过 function 声明的函数，会自动变成window 对象的属性或方法
:::

```js
// 全局作用域中，var声明的变量，通过function声明的函数，会自动变成window对象的属性或方法
var age = 20;
function add() {}
console.log(window.age);
console.log(window.add === add);
```

全局作用域中，let、const 声明的变量 或 `function` 声明的函数，不会自动变成`window`对象的属性或方法

```js
// 全局作用域中，let、const 声明的变量 或 function声明的函数，不会自动变成window对象的属性或方法
let age = 20;
const add = function () {};
console.log(window.age); // undefined
console.log(window.add === add); // false
```

## 5. 块级作用域

:::tip 
let、const 和 var 最重要的区别即：是否拥有块级作用域。

在 JavaScript 中有哪些作用域：

- 全局作用域
- 函数作用域/局部作用域
- 块级作用域（ES6 新增）
:::


::: tip 全局作用域
全局作用域顾名思义，就是在任何地方都能访问到它，在浏览器中能通过 window 对象拿到的变量就是全局作用域下声明的变量。
:::

```ts
var username = "icoding";
console.log(window.username); // icoding

// 使用 var 定义的变量，可以在 window 对象上拿到此变量
// 这里的 name 就是全局作用域下的变量
```

::: tip 函数作用域
- 函数作用域，也称为局部作用域，所有写在函数内部的代码，就是在函数作用域中
- 声明在函数作用域中的变量为局部变量，从外层是无法直接访问函数内部的变量
:::

```ts
function foo() {
  var username = "icoding";
}
console.log(username); // Uncaught ReferenceError: username is not defined
```

::: tip 块级作用域
块级作用域是 ES6 的概念，它的产生是要有一定的条件的，在花括号`{}`中，使用 `let` 或 `const` 声明的变量，才会产生块级作用域。

### 注意

- 块级作用域的产生是 `let` 或 `const` 带来的，而不是花括号，花括号的作用是限制 `let` 或 `const` 的作用域范围。
- 当不在大括号中声明时， `let` 或 `const` 的作用域范围是全局，但是不在 `window` 对象身上
:::