# 使用const 注意事项

使用 `const` 声明常量，一旦声明，就必须立即初始化，不能留到以后赋值

```ts
// 以下错误演示
const sex; // Uncaught SyntaxError: Missing initializer in const declaration 未捕获语法错误：const声明中缺少初始值设定项
sex = 'male';

// 正确的做法是：声明+初始化应该一气呵成
const sex = 'male';
```

`const` 声明的常量，允许在**不重新赋值**的情况下修改它的值

- 情况一：const 声明的基本数据类型

```ts
// 基本数据类型
const sex = "male";
sex = "female"; // Uncaught TypeError: Assignment to constant variable.

// 我们看到报错了，也就是说：对于基本数据类型来说，我们是没有办法在不重新赋值的情况下修改它的值
// 因此，对于const声明的常量是基本数据类型来说就没有办法修改它的值
```

- 情况二：`const` 声明的引用数据类型

```ts
// 引用数据类型
const person = { username: "zs" };
// 对person重新赋值，通过前边的学习，我们知道对于const声明的常量来说是不被允许的
// person = {}; // 报错了 Uncaught TypeError: Assignment to constant variable.

// 但，引用数据类型不一定要通过重新赋值的方式来修改值
// 可以直接找到对应的属性，对它完成修改
person.username = "ls";
console.log(person); // 正确输出修改后的对象 {username: 'ls'}
```