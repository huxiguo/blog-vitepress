// #region snippet
// 数组解构赋值，左边相当于声明了两个变量a和c 用来接受右边对应结构位置上的值
const [a, , c] = [1, 2, 3]
console.log(a, c)
// 对象解构赋值的内部机制是：先找对象中与变量名同名的属性名，然后再将对象对应的属性值赋值给到对应变量。
// 以下代码等号左边的x,y为对象属性名， _x 和 _z 才是新声明的变量，
const { x: _x, y: _y } = { x: 1, y: 2 }
console.log(_x, _y)
// #endregion snippet
export {}
