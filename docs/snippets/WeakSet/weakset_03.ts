// #region snippet
const ws = new Set()
function Person(name: string, age: number) {
	this.name = name
	this.age = age
	ws.add(this)
}
Person.prototype.sayHello = function () {
	if (!ws.has(this)) throw new TypeError("sayHello方法只能在Person的实例上调用")
	console.log(`hello world`)
}

let p = new Person("hoo", 20)
p.sayHello()
// p.sayHello.call({ name: "icoding", age: 33 }); // 报错
p = null // 将p对象销毁
console.log(ws) // 但因为ws中保存着对对象p的引用，所以垃圾回收并没有回收p，一直在内存中存着
// #endregion snippet
export {}
