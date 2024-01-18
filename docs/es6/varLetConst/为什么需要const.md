# 为什么需要const

```ts
// 假如只有let的情况，我们期望声明的 sex 值一旦声明后就是不变的。
// 当然性别一般情况下就是不变的，也符合常识
let sex = "male";
// ... 经历很多程序之后，如果不小心修改了 sex 的值，浏览器也不会报错
sex = "semale";
console.log(sex); // semale

// 我们可以看到 sex 的值被修改了，其实它按我们的期望来讲就是隐形一个错误
// 也就是说这样的错误很可能发生，并没有任何提示，但它确实是一个错误，会造成我们的程序出现问题，类似这样的问题在过去么有什么很好的办法解决，只能通过开发者自己小心来定义
```

但，const 的出现就不会有以上的问题了

```ts
// 我们现在使用 const 将 sex 声明为常量
const sex = "male";
// ... 如果不小心完成了以下赋值操作，就报错了
sex = "semale"; // Uncaught TypeError: Assignment to constant variable.
console.log(sex);
```