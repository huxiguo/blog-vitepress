// #region snippet
let s = Symbol("ss")
let m = Symbol("mm")
// 由于 s 和 m 是变量，而不是字符串，因此需要使用中括号括起来（否则它会被当做字符串使用）
let obj = {
	username: "icoding",
	[s]: 18,
	[m]: function () {},
}
// for ... in 循环遍历 obj
for (let o in obj) {
	console.log(o) // username
}

// getOwnPropertySymbols()方法
const arr1 = Object.getOwnPropertySymbols(obj)
console.log(arr1) // [ Symbol(ss), Symbol(mm) ]

// Reflect.ownKeys()方法
const arr2 = Reflect.ownKeys(obj)
console.log(arr2) // [ "username", Symbol(ss), Symbol(mm) ]
// #endregion snippet
export {}
