# js es6 面试题

## JS 有哪些数据类型，如何判断这些数据类型 ？

最新的 ECMAScript 标准定义了 8 种数据类型（7 种基本数据类型、1 种引用数据类型）

基本数据类型：string（字符串）、number（数字）、boolean（布尔）、undefined（未定义）、null（空）、Symbol（符号）、BigInt（数值类型，表示任意精度的整数）

引用数据类型：Object 对象：Array（数组）、Function（函数）、Date（时间）等

### 数据类型检测方法一：typeof

```js
typeof 1 //'number'
typeof "" //'string'
typeof true //'boolean'
typeof undefined // 'undefined'
typeof null //'object'
typeof [1, 2, 3] //'object'
typeof {} //'object'
typeof function () {} //'function'
typeof Symbol() //'symbol'
```

- typeof 的返回值类型为字符串类型
- typeof 判断基本数据类型时，除了 null 的输出结果为'object' 其它类型都能正确判断
- typeof 判断引用数据类型时，除了判断函数会输出'function' 其它都输出'object'

:::danger 标红
null 的数据类型是 object （null 是对一个空对象的引用，是一个占位符）

- typeof 并不能区分引用数据类型（Array 数组、Date 时间）等
- 所以我们可以使用 instanceof 来判断引用数据类型
  :::

### 数据类型检测方法二：instanceof

- instanceof 用来判断两个对象是否属于实例关系，通过这种关系来判断对象是否属于某一类型。（但不能判断对象具体属于哪种类型）。
- instanceof 可以准确判断引用数据类型，它的原理是：检测构造函数的 prototype 属性是否在某个实例对象的原型链上。
- instanceof 返回值为布尔值

```js
class People {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	eat() {
		console.log(`${this.name}正在吃饭`)
	}
}
//Student类继承People类
class Student extends People {
	constructor(name, age, id) {
		super(name, age)
		this.id = id
	}
	study() {
		console.log(`${this.name}正在学习`)
	}
}
const s = new Student("小明", 15, "0001")
console.log(s.__proto__ === Student.prototype)
console.log(Student.prototype.__proto__ === People.prototype) //true
console.log(People.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null
console.log(s instanceof Student) //只要在原型链上，都为true
console.log(s instanceof People) //只要在原型链上，都为true
console.log(s instanceof Object) //只要在原型链上，都为true
```

### 数据类型检测方法三：Object.prototype.toString.call()

toString()是 Object 的原型方法，调用该方法，默认返回当前对象的 [object type]。其中 type 就是对象的类型。

- Object 对象，直接调用 toString() 就能返回 [object Object]
- 其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息

```js
Object.prototype.toString.call("") // [object String]
Object.prototype.toString.call(1) // [object Number]
Object.prototype.toString.call(true) // [object Boolean]
Object.prototype.toString.call(Symbol()) // [object Symbol]
Object.prototype.toString.call(undefined) // [object Undefined]
Object.prototype.toString.call(new Function()) // [object Function]
Object.prototype.toString.call(new Date()) // [object Date]
Object.prototype.toString.call([]) // [object Array]
Object.prototype.toString.call({}) // [object Object]
Object.prototype.toString.call(document) // [object HTMLDocument]
Object.prototype.toString.call(window) // [object Window]
```

## number 类型表示整数的最大范围

Javascript 数字使用 Number 类型存储。Number 类型是有 64bit 浮点数，能够准确计算的整数范围为在 -2^53~2^53 之间，不包含两个端点

ECMAScript 能够表示的数字的绝对值范围是 5e-324 ~ 1.7976931348623157e+308，这两个取值可以通过 Number.MIN_VALUE 和 Number.MAX_VALUE 这两个字段来表示，如果某次计算的结果得到了一个超出 JavaScript 数值范围的，那么这个数值会自动被转换为特殊的 Infinity 值，具体来说，如果这个数是负数，则会被转换成 -Infinity（负无穷），如果这个数值是正数，则会被转换成 Infinity（正无穷）。

JavaScript 中最大安全整数的范围是 253 ~ 253，不包括两个端点，即 -9007199254740991 ~ 9007199254740991，可以通过 Number.MIN_SAFE_INTEGER 和 Number.MAX_SAFE_INTEGER 字段查询，超出这个范围的整数计算都是不准确的

```js
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991
console.log(9007199254740991 + 2) // 9007199254740992
```

## 什么是变量提升 ？

是指使用 var 关键字声明的变量会自动提升到当前作用域的最前面。不过只会提升声明，不会提升其初始化。

```js
console.log(a) // undefined
var a = 10
function fn() {
	console.log(b) // undefined
	var b = 1
}
fn()
```

- 我们在 var a=10; 之前 console.log(a); 之所以不会报错，就是因为变 a 的声明被提前到了当前作用域的最顶部
- 不过只提升了声明，并没会提升初始化，所以打印结果为 undefined; （变量声明初始化，其默认值是 undefined）

- 函数声明也会被提升，函数和变量相比，会被优先提升。
- 这意味着函数会被提升到更靠前的位置，如果出现了重名的变量和函数，声明提升时会以函数为主。

```js
console.log(num) // function num(){console.log('函数');}  函数被优先提升
var num = 1
console.log(num) // 1 在从上往下执行时num变量赋值为 1
function num() {
	console.log("函数")
}
console.log(num()) // 报错，因为变量num被重新赋值为1，不会再有函数了
```

## typeof(NaN) 返回什么 ？

- NaN 不是数字的数字类型，所以 typeof(NaN) 返回结果就是 number
- NaN === NaN 结果为 false，他自己和他自己都不相等

## typeof(null) 为什么返回的是 'object'

- typeof(null) = object 是 JS 在诞生设计之初留下的历史遗留 BUG 问题
- 在 JS 中进行数据底层存储的时候是用二进制存储的，这是一定的，而且它的前三位是代表存储的数据类型，而 000 是代表 object 类型也就是引用类型的数据。
- 而 null 正好全是 0，所以它巧妙的符合 object 类型的存储格式，所以在 typeof 检测的时候，它才会输出 object。

## null 和 undefined 的区别 ？

- undefined（未定义）：当一个变量被定义（声明）但并没有赋值时，他的初始值就是 undefined。
- null（空）：表示对一个空对象的引用。
  - 当一个变量定好之后，未来是用来保存对象的引用时，我们可以给他赋初始值为 null。
  - 当一个对象使用完，需要对其进行释放内存时，可以将其值设置 null （js 会自动垃圾回收）

相同点：

- undefined 和 null 都是基本数据类型，保存栈中。
- undefined 和 null 转换为 boolean 布尔值都为 false

不同点:

两者转换为数字类型时，其值不一样

- `Number(undefined); //NaN`
- `Number(null); //0`

特殊点:

`undefined == null; //true`

## console.log([] == false)的输出结果

`console.log([] == false); // true`

- [] 转换成字符串是'' ，然后'' 转换成数值是 0
- false 转换成数值是 0 所以最后比较的值是 0==0 ，结果为 true

## == 和 === 的区别？

== 在比较类型不同的变量时，如果两侧的数据类型不同，则会按以下规则进行相应的隐式类型类型转换

`对象 --> 字符串 --> 数值`

`布尔值 --> 数值`

转换后，再比较两边的值是否相等，值相等返回 true，不等返回 false;

=== 在比较时，会比较值和类型两个。只要两边值的类型不相等就返回 false

```JS
var x = 2;
var y = "2";
(x == y)(
  // 返回 true，因为 x 和 y 的值相同
  x === y
);
// 返回 false，因为 x 的类型是“数字”，y 的类型是“字符串”


NaN === NaN; // false NaN和任何数据都不相等，包括自身
[] == []; // false 比较的是地址
{} == {}; // false 比较的是地址
undefined == null; // true; 特殊情况，记下
```

## const、let、var 区别

- 变量提升和暂时性死区： var 存在变量提升，let 和 const 不存在变量提升，所以 let 和 const 会存在暂时性死区
- 块级作用域： var 不存在块级作用域，let 和 const 存在块级作用域
- 重复声明： var 允许重复声明变量，let 和 const 在同一作用域下不允许重复声明变量
- 修改变量： var 和 let 声明的变量可以修改，const 是不可以的。
- 使用：const 用来声明常量，引用类型值。其它情况推荐用 let ，避免用 var

## const 定义的值一定是不能改变的吗？

- const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个栈内存地址所保存的数据不得改动。
- 对于简单类型的数据（数值、字符串、布尔值）值就保存在变量指向的那个栈内存地址，因此等同于常量。
- 引用类型的数据（主要是对象和数组）变量指向的栈内存地址，保存的只是一个指向实际数据的指针
- const 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
- 如果是 const 声明的是一个引用类型的变量，其引用类型的结构是可以发生改变的。

## JS 获取字符串的第 N 个字符

```js
function getStr(str, n) {
	return str.charAt(n)
}
```

## 对闭包的理解

闭包让你可以在一个内层函数中访问到其外层函数的作用域

在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来，作为函数内部与外部连接起来的一座桥梁

```js
function init() {
	var name = "Mozilla" // name 是一个被 init 创建的局部变量
	function displayName() {
		// displayName() 是内部函数，一个闭包
		alert(name) // 使用了父函数中声明的变量
	}
	displayName()
}
init()
```

displayName() 没有自己的局部变量。然而，由于闭包的特性，它可以访问到外部函数的变量

## JS 作用域和作用域链

## 说一下 ES6 的块级作用域

## 有哪些类型的作用域

## 怎么理解 JS 静态作用域和动态作用域

## 以下代码输出的结果是

```js
Object.prototype.a = 10;
var s = Symbol();
var obj = {
    [s]: 20,
    b: 30
}
Object.defineProperty(obj, 'c', {
    enumerable: true，
    value: 40
})
for(let var in obj) {
    console.log(val)
}
```

## 说说你对原型链的理解

## 原型链的终点是什么？

## es6 class 怎么设置原型、静态、实例方法

## []的原型链是什么

## JS 的继承有几种方式 ？是怎么实现的？

## 在 JS 中如何实现多重继承 ？

## 数组去重的方式有哪些？时间复杂度分别是多少

## 将数组的 length 设置为 0，取第一个元素会返回什么？

## 代码题 ：用尽可能多的方法实现数组扁平化

## 什么是类数组

## 类数组怎么转换为数组，说说你知道的所有方法

## arguments 类数组，如何遍历类数组

## 判断数组的方式

## 新创建一个数组空间

## 用过 ES6 哪些数组的方法，简述他们的特性

## 数组中的方法如何实现 break

## JS 中 filter 方法如何使用

## 以下代码输出的结果是

```js
async function async1() {
	console.log("async1")
	await async2()
	console.log("async1 end")
}
async function async2() {
	console.log("async2")
}
console.log("script start")
setTimeout(() => {
	console.log("setTimeOut")
}, 0)
async1()
new Promise((resolve) => {
	console.log("promise")
	resolve()
}).then(() => {
	console.log("promise2")
})
console.log("script end")
```

## JS 异步处理发展史

## 同步任务和异步任务区别

## Promise 的一些静态方法说说它们作用和区别

## promise 和 await async 有什么区别吗

## 有了 promise 为什么还需要 async/await

## JSONP 原理

## instanceof 原理

## 了解哪些设计模式

## EventLoop JS 事件循环队列、宏任务和微任务

## ES6 和 CommonJS 对循环引用的处理有什么不同

## 取两个整数之间随机一个整数

## 从数组中取 m 个数和为 n

## 写一道题：给两个矩形，有每个矩形点坐标以及长宽高，判断是否相交

## 查找字符串中最长不重复子串

## 实现函数的链式调用

## 写一个返回数字类型的函数，要求自定义的类实例化的对象返回定义的类名

## 前端如何导出列表全部页面数据

## 监听时间的三个参数

## JS 随机生成颜色

## 如何判断元素出现在可视区域

## 判断元素距离文档顶部的距离和视图窗口高度和滚动过距离和的大小关系

## 正则实现一个简单用户名的匹配

## 实现防抖和节流，原理介绍+应用场景
