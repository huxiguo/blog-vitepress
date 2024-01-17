// #region snippet
const ws = new WeakSet()
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
console.log(ws) // 其内部的引用也消失，垃圾回收将对象回收掉了

// #endregion snippet
export {}
