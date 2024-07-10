# Promise 用法、实例方法、原理与异步编程的实践应用

## 什么是 Promise
Promise 是异步编程的一种解决方案，关于异步编程的解决方案，在之前我们学习过，回调函数是解决异步操作的一种解决方案，但是他存在一些缺陷，而这些缺陷 Promise 可以完美解决。

## 什么时候使用 Promise

Promise 一般用来解决层层嵌套的回调函数（回调地狱 callback hell）的问题

## Promise 的基本用法

::: tip
ES6 规定，Promise 对象是一个构造函数，用来生成 Promise 实例。
:::

- 构造函数接受一个函数作为参数，该函数有两个参数，分别是resolve和reject
```JavaScript
const promise = new Promise(function (resolve, reject) {});
// 参数resolve和reject是两个形参，名字可自定义，为了更符合语义，建议使用resolve和reject来命名
```

- Promise 对象一旦创建，就会立即执行构造函数参数中的函数（我们称此函数为执行器 executor 函数）
```js
const promise = new Promise(function (resolve, reject) {
  console.log("立马执行");
});
// 输入结果： 立马执行
```

## Promise 的三种状态

:::tip 
Promise 代表一种异步操作，他有三种状态，分别代表异步操作的三种状态

- 待定（pending）：初始状态，既没有被兑现，也没有被拒绝。
- 已兑现（fulfilled）：意味着操作成功完成。
- 已拒绝（rejected）：意味着操作失败。
:::

- 刚创建一个 Promise 对象，他的的状态为 pending 待定或正在进行中。
- 调用resolve函数，Promise 的状态由 pending （待定）变为fulfilled （成功）
- 调用reject函数，Promise 的状态由pending（待定）变为 rejected（失败）

## 注意事项
- Promise 的状态一旦由 pending变为rejected或fulfilled，就不可能再发生改变了。
- Promise 内部抛出错误，promise 的状态也会由pending变为rejected

## then 方法的简单应用

:::tip
then 方法的作用是为 Promise 实例添加状态改变时的回调函数。then 方法中有两个参数，这两个参数分别为两个回调函数。

- 第一个回调函数在 Promise 的状态变为fulfilled的时调用，表示成功的回调。
- 第二个回调函数在 Promise 的状态变为rejected的时候调用，表示失败的回调。
:::

```js
const promise = new Promise(function (resolve, reject) {
  resolve(); // Promise状态由pending-->fulfilled ,调用then方法的第一个回调函数
});

promise.then(
  // promise状态变为fulfilled时，调第一个回调
  (data) => {
    console.log("成功的回调");
  },
  // promise状态变为rejected时，调第二个回调
  (data) => {
    console.log("失败的回调");
  }
);
// 打印结果： 成功的回调
```

```js
const promise = new Promise(function (resolve, reject) {
  reject(); // Promise状态由pending-->rejected 调用then方法的第二个回调函数
});

promise.then(
  (data) => {
    console.log("成功的回调");
  },
  (data) => {
    console.log("失败的回调");
  }
);
// 打印结果： 失败的回调
```

## resolve 和 reject 参数

resolve 和 reject 参数分别为两个函数，这两个函数的作用分别用来在异步操作成功和失败时调用。

| 参数         | 作用                                                                                                                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resolve 函数 | 当异步操作成功时调用resolve函数，他可以将 Promise 的状态由 pending 变为 fulfilled，同时将异步操作的结果作为 resolve 函数的参数传递出去。 resolve 函数通常带一个参数，其参数会被传递到 then 方法的第一个回调函数的参数 |
| reject 函数  | 当异步操作失败时调用reject函数，他可以将 Promise 的状态由 pending 变为 rejected，同时将异步操作的结果作为 rejected 函数的参数传递出去。reject 函数通常带一个参数，其参数会被传递到 then 方法的第二个回调函数的参数    |