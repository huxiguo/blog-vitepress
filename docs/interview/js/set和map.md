# Set 和 Map 数据结构

## 1. Set

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

`Set`本身是一个构造函数，用来生成 Set 数据结构。

<<< @/snippets/interview-js-set/interview-js-set_01.ts#snippet


`Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

<<< @/snippets/interview-js-set/interview-js-set_02.ts#snippet

向 Set 加入值的时候，不会发生类型转换，所以`5`和`"5"`是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做`“Same-value-zero equality”`，它类似于精确相等运算符`（===）`，主要的区别是向 Set 加入值时认为`NaN`等于自身，而精确相等运算符认为`NaN`不等于自身。


<<< @/snippets/interview-js-set/interview-js-set_03.ts#snippet

两个对象总是不相等的

<<< @/snippets/interview-js-set/interview-js-set_04.ts#snippet
