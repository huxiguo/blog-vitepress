// #region snippet
// 对象的写法
const properties1 = {
	width: 1,
	height: 1,
}

if (properties1[someName]) {
	// do something
}

// Set的写法
const properties2 = new Set()

properties2.add("width")
properties2.add("height")

if (properties2.has(someName)) {
	// do something
}
// #endregion snippet

export {}
